export const WHATSAPP_NUMBER = "919876543210";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductWhatsAppMessage(
  productName: string,
  size?: string,
  quantity?: number
): string {
  const parts = [`I want to buy ${productName}`];
  if (size) parts.push(`Size: ${size}`);
  if (quantity && quantity > 1) parts.push(`Quantity: ${quantity}`);
  return parts.join("\n");
}

export function buildCartWhatsAppMessage(
  items: { name: string; size: string; quantity: number; price: number }[]
): string {
  const lines = items.map(
    (item, i) =>
      `${i + 1}. ${item.name} (${item.size}) x${item.quantity} — ₹${item.price * item.quantity}`
  );
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return `Hello ABC Wood Oil Factory,\n\nI would like to order:\n\n${lines.join("\n")}\n\nTotal: ₹${total}\n\nPlease confirm availability.`;
}
