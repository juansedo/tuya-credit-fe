/**
 * @deprecated
 */
export default class ProductModel {
    id: number;
    ref: string;
    image_url: string;
    description: string;
    value: number;
    discount_percent: number;
    special_discount_percent: number;
    warehouse: string;

    constructor(
        id: number,
        ref: string,
        image_url: string,
        description: string,
        value: number,
        discount_percent: number,
        special_discount_percent: number,
        warehouse: string
        ) {
        this.id = id
        this.ref = ref
        this.image_url = image_url
        this.description = description
        this.value = value
        this.discount_percent = discount_percent
        this.special_discount_percent = special_discount_percent
        this.warehouse = warehouse
    }
}
