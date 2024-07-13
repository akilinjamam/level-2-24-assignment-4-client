export type TProductItem = {
  _id?: string;
  img: string;
  title: string;
  brand: string;
  price: number;
  availableQuantity: number;
  rating: number;
  description: string;
};

export const productItems: TProductItem[] = [
  {
    img: "https://example.com/images/keyboard1.jpg",
    title: "Ducky One 2 Mini",
    brand: "Ducky",
    price: 99.99,
    availableQuantity: 2,
    rating: 5,
    description:
      "60% mechanical keyboard with Cherry MX Red switches and customizable RGB lighting.",
  },
  {
    img: "https://example.com/images/keyboard2.jpg",
    title: "Keychron K6",
    brand: "Keychron",
    price: 79.99,
    availableQuantity: 20,
    rating: 4,
    description:
      "Compact 65% wireless mechanical keyboard with hot-swappable switches and RGB backlight.",
  },
  {
    img: "https://example.com/images/keyboard3.jpg",
    title: "Corsair K95 RGB Platinum",
    brand: "Corsair",
    price: 199.99,
    availableQuantity: 10,
    rating: 5,
    description:
      "Premium full-size mechanical keyboard with Cherry MX Speed switches and dynamic RGB lighting.",
  },
  {
    img: "https://example.com/images/keyboard4.jpg",
    title: "Logitech G Pro X",
    brand: "Logitech",
    price: 129.99,
    availableQuantity: 25,
    rating: 4,
    description:
      "Tenkeyless mechanical keyboard with GX Blue switches and swappable key switches.",
  },
  {
    img: "https://example.com/images/keyboard5.jpg",
    title: "Razer BlackWidow Elite",
    brand: "Razer",
    price: 149.99,
    availableQuantity: 12,
    rating: 3,
    description:
      "Mechanical keyboard with Razer Green switches, RGB lighting, and dedicated media controls.",
  },
  {
    img: "https://example.com/images/keyboard6.jpg",
    title: "Anne Pro 2",
    brand: "Anne",
    price: 89.99,
    availableQuantity: 18,
    rating: 4,
    description:
      "60% mechanical keyboard with Bluetooth connectivity, RGB lighting, and Gateron switches.",
  },
];
