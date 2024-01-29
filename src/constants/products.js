import { products_images } from './images'
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
        id: 1,
        title: "Plan virtual",
        subtitle: "Coworking Quito",
        description:
            "Utiliza la direccion del coworking. Recibimos tus paquetes y tendrás acceso a las salas de reuniones",
        price: 70,
        image: products_images.reunion1_1,
        products: [
            {
                id: 11,
                image: products_images.reunion1_2
            },
            {
                id: 12,
                image: products_images.reunion1_3
            }
        ]
    },
    {
        id: 2,
        title: "Espacios personales de trabajo",
        subtitle: "Coworking Quito",
        description:
            "Un cubículo para una persona con todos los beneficios mencionados",
        price: 120,
        image:
            products_images.cubiculo1_1,
        products: [
            {
                id: 21,
                image: products_images.cubiculo1_1
            },
            {
                id: 22,
                image: products_images.cubiculo1_2
            },
            {
                id: 23,
                image: products_images.reunion1_2
            },
        ]
    },
    {
        id: 3,
        title: "Oficina para dos personas",
        subtitle: "Coworking Quito",
        description:
            "Una oficina para dos personas con todos los beneficios antes mencionados",
        price: 200,
        image:
            products_images.cubiculo2_1,
        products: [
            {
                id: 31,
                image: products_images.cubiculo2_2
            },
            {
                id: 32,
                image: products_images.cubiculo2_2
            },
            {
                id: 33,
                image: products_images.cubiculo2_3
            },
            {
                id: 34,
                image: products_images.cubiculo2_4
            },
            {
                id: 35,
                image: products_images.reunion1_2
            },
        ]
    },
    {
        id: 4,
        title: "Oficina para 3 personas",
        subtitle: "Coworking Quito",
        promo: "valido por 3 meses",
        description:
            "Una oficina para tres personas con todos los beneficios antes mencionados",
        price: 250,
        image: products_images.cubiculo3_1,
        products: [
            {
                id: 41,
                image: products_images.cubiculo3_1
            },
            {
                id: 42,
                image: products_images.cubiculo3_2
            },
            {
                id: 43,
                image: products_images.cubiculo3_3
            },
            {
                id: 44,
                image: products_images.cubiculo3_4
            },
            {
                id: 45,
                image: products_images.cubiculo3_5
            },
            {
                id: 46,
                image: products_images.reunion1_2
            },
        ]
    }
];