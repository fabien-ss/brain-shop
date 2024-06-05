class BrainShop
{
    constructor() {
        this.apiKey = process.env.BrainShop;
    }
    async talk(client, subject){
        try{
            const response = await fetch("http://api.brainshop.ai/get?bid=181719&key="+process.env.BRAINSHOP+"&uid="+client+"&msg="+subject)
            if(response.status === 200){
                const text = await response.json();
                return {
                    status : 200,
                    message: text,
                    client: client
                }
            }
            else{
                throw new Error(response.statusCode);
            }
        }catch(e){
            return {
                status : 400,
                message: e,
                client: client
            }
        }
    }
}

module.exports = BrainShop