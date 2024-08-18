/* 
Manam ikkada APIUtils ani oka JavaScript class create chesamu. 
E class lo manam getToken() mariyu createOrder() ane two methods ni define chesam. 
Ippudu, manam ekkada this keyword ni use chesamo, adhi enti, aduku kosam chesam ani step-by-step ga chepthanu.
*/

class APIUtils
{
    /* 
    constructor(apiContext, loginPayLoad)
    this.apiContext: E variable ni this keyword use chesi class instance ki assign chesam. 
    Ee variable lo apiContext ane parameter nunchi vachina value untundi.
    this.loginPayLoad: Idi loginPayLoad ane parameter ki sambandhinchina value ni store chestundi.

    this keyword enduku use chesam?
    this keyword ante current object ki refer chestundi. 
    Ikkada this.apiContext ante, current instance of APIUtils class lo apiContext ni store chestundi.
    */
    constructor(apiContext, loginPayLoad)
    {
        this.apiContext = apiContext,
        this.loginPayLoad = loginPayLoad
    }
    /* 
    this.apiContext.post
    this.apiContext: Constructor lo apiContext ni assign chesam kada, 
    adi ikkada post() method call cheyataniki use chestunnamu. 
    Ee post() method HTTP POST request ni send chestundi.
    this.loginPayLoad
    this.loginPayLoad: Ee value constructor lo initialize chesam, and ikkada dani API ki data ga pass chestunnamu.
    */
    async getToken()
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        
            {
            data:this.loginPayLoad
            });
            const loginResponseJson = await loginResponse.json();
            const Token = loginResponseJson.token;
            return Token;

    }
    /* 
    response.Token = await this.getToken()
    this.getToken(): Idi getToken() method ni call chesi, adi return chesina token ni response.
    Token lo store chestundi.
    this.apiContext.post
    this.apiContext: 
    Again, ikkada apiContext lo assign chesina value ni use chesi post() method call chestunnamu to create an order.   
    */
    async createOrder(orderPayLoad){
        let response = {};
        response.Token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
            data : orderPayLoad, 
            headers :{
                'Authorization': response.Token,
                'Content-Type': 'application/json'
            }
        })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }
    
}
//module.exports = {APIUtils};
export { APIUtils };
