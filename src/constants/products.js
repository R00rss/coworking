export class Product {

    /**
     * @param {string} id
     * @param {string} title
     * @param {string} subtitle
     * @param {string} description
     * @param {number} price
     * @param {string} image
     * @param {string|undefined} promo
     */
    constructor(id, title, subtitle, description, price, image, promo) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.price = price;
        this.image = image;
        this.promo = promo;
    }
}

export const products = [
    {
        id: crypto.randomUUID(),
        title: "Plan virtual",
        subtitle: "Coworking Quito",
        description:
            "Utiliza la direccion del coworking. Recibimos tus paquetes y tendrás acceso a las salas de reuniones",
        price: 70,
        image:
            "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp",
        products: [
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "Espacios personales de trabajo",
        subtitle: "Coworking Quito",
        description:
            "Un cubículo para una persona con todos los beneficios mencionados",
        price: 120,
        image:
            "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp",
        products: [
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "Oficina para dos personas",
        subtitle: "Coworking Quito",
        description:
            "Una oficina para dos personas con todos los beneficios antes mencionados",
        price: 200,
        image:
            "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp",
        products: [
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "Oficina para 3 personas",
        subtitle: "Coworking Quito",
        promo: "valido por 3 meses",
        description:
            "Una oficina para tres personas con todos los beneficios antes mencionados",
        price: 250,
        image:
            "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp",
        products: [
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        title: "Oficina para 4 - 5 personas",
        subtitle: "Coworking Quito",
        description:
            "Una oficina para cinco personas con todos los beneficios antes mencionados",
        price: 300,
        image:
            "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp",
        products: [
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            },
            {
                id: crypto.randomUUID(),
                image: "https://www.spacecowork.net/wp-content/uploads/2024/01/PLATAFORMA-3-scaled.webp"
            }
        ]
    },
];