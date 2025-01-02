//Interface representing an order entity.
export interface IOrders {
    //Unique identifier for the order.
    id: number,
    //Foreign key referencing the customer who made the order.
    id_customer: number,
    //Foreign key referencing the product being ordered.
    id_product: number,
    //Quantity of the product being ordered.
    quantity: number
}