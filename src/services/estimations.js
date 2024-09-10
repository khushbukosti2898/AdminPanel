// Helper functions to calculate totals
export const calculateItemTotal = (quantity, price, margin) => {
  const baseTotal = quantity * price;
  const marginAmount = (margin / 100) * baseTotal;
  return baseTotal + marginAmount;
};

export const calculateSectionTotal = (items) => {
  return items.reduce((acc, item) => acc + item.total, 0);
};

export const calculateBaseTotal = (sections) => {
  return sections.reduce(
    (acc, section) =>
      acc +
      section.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    0
  );
};

export const calculateTotalMargin = (sections) => {
  return sections.reduce(
    (acc, section) =>
      acc +
      section.items.reduce(
        (sum, item) => sum + (item.margin / 100) * item.quantity * item.price,
        0
      ),
    0
  );
};
