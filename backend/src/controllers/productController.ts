import { Request, Response } from 'express';
import puppeteer from 'puppeteer';
import { Product } from '../models/Product';

export const addProduct = async (req: Request, res: Response) => {
  const { name, quantity, rate } = req.body;

  try {
    const total = quantity * rate;
    const gst = total * 0.18;
    const product = new Product({ name, quantity, rate, total, gst });

    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const generateInvoice = async (req: Request, res: Response) => {
  const { products, user } = req.body;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(`
      <html>
        <body>
          <h1>Invoice</h1>
          <p>User: ${user.name}</p>
          <p>Email: ${user.email}</p>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${products.map((p: any) => `
                <tr>
                  <td>${p.name}</td>
                  <td>${p.quantity}</td>
                  <td>${p.rate}</td>
                  <td>${p.total}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `);

    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="invoice.pdf"',
    });

    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
