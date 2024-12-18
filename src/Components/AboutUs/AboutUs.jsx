import React from "react";

const AboutPage = () => {
  const products = [
    {
      name: "EMBROIDERED T-SHIRT",
      description:
        "Elevate your everyday style with our exquisitely crafted T-shirt, where comfort meets artistry. Made from luxurious French Cotton Terry, this T-shirt offers a soft, breathable feel that's perfect for all-day wear. The fabric's natural stretch and cozy texture ensure a relaxed fit that moves with you. What sets this piece apart is the intricate embroidery embellishing the front, adding a touch of elegance and sophistication. The delicate stitching reflects our commitment to creating wearable art that speaks to your unique sense of style.",
    },
    {
      name: "RELAXED FIT T-SHIRT",
      description:
        "Discover effortless style with our relaxed fit washed dye T-shirt, where modern design meets bold expression. Crafted from premium fabric, this T-shirt features a unique washed dye finish that gives it a soft, lived-in feel and a rich, vintage-inspired color palette. The relaxed fit ensures comfort and ease, making it a go-to piece for any casual day out. The standout feature is the striking motif of a face emblazoned on the front, a statement of individuality and artistic flair. Complemented by subtle branding, this T-shirt embodies the spirit of Avant Divine—where fashion is a form of visual storytelling.",
    },
    {
      name: "EMBELLISHED HEAVY DUTY JEANS",
      description:
        "Step into the spotlight with our heavy-duty denim jeans, a true masterpiece that redefines bold fashion. Handcrafted to perfection, these jeans are not just clothing—they're a work of art. Made from premium, durable denim, they offer both strength and comfort, designed to withstand the test of time. What truly sets these jeans apart is the all-over silver foiling, which creates a stunning, reflective effect that catches the light and turns heads. The intricate embellishments add a layer of sophistication, making each pair as unique as the person wearing them.",
    },
    {
      name: "FLARED MINI SKIRT",
      description:
        "Despite its eye-catching design, this skirt doesn't compromise on comfort. The soft denim waistband ensures a snug fit, while the airy organza overlay adds a touch of elegance without sacrificing ease of movement. Whether you're pairing it with a simple tee or a statement top, this mini skirt embodies the fun, fearless spirit of Y2K with a modern twist. Elevate your wardrobe with this Avant Divine creation, where past meets present in the most stylish way.",
    },
    {
      name: "THE LIPS BODYSUIT",
      description:
        "Unleash your bold side with our stunning bodysuit, a perfect blend of comfort and daring style. Crafted from soft, stretchy fabric, this bodysuit hugs your curves while offering all-day comfort and ease of movement. The sleek design is elevated by a striking, statement-making print—a vivid red pair of lips that adds a touch of playful attitude to your look.",
    },
    {
      name: "THE LIPS DRESS",
      description:
        "Make a bold statement with our captivating dress, where comfort meets striking design. This figure-flattering piece is crafted from soft, breathable fabric that drapes beautifully, ensuring you feel as good as you look. The highlight of this dress is the daring bold red lips print—a playful and edgy motif that adds an element of attitude and allure.",
    },
    {
      name: "RIBBED TANK TOP",
      description:
        "Elevate your essentials with our ribbed tank top, a perfect blend of classic style and subtle sophistication. Made from premium, soft ribbed fabric, this tank top offers a flattering fit that enhances your silhouette while providing all-day comfort. The timeless design is versatile, making it a wardrobe staple that can be dressed up or down with ease.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-16">
        ABOUT US
      </h1>

      <div
        className="space-y-8 text-gray-800 leading-relaxed mb-16"
        style={{ textAlign: "justify" }}
      >
        <p>
          Avant Divine is a homegrown Indian brand that redefines fashion with a
          unique blend of comfort and creativity. We believe that clothing
          should not only be comfortable but also a canvas for artistic
          expression. Our ready-to-wear collections are thoughtfully designed to
          provoke emotions and communicate through a visual language that
          resonates with the soul.
        </p>
        <p>
          Each piece from Avant Divine is crafted with the highest attention to
          detail, merging traditional craftsmanship with contemporary
          aesthetics. We are passionate about creating wearable art that speaks
          to the modern individual—those who value both style and substance. At
          Avant Divine, fashion is more than just what you wear; it's a
          statement, a story, and an experience.
        </p>
      </div>

    </div>
  );
};

export default AboutPage;
