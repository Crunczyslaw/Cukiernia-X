var LacznyKoszt = 0

var BabeczkaQuantitiy = 0
    const BabeczkaPrice = 9
var BorowkaQuantitiy = 0
    const BorowkaPrice = 40
var CzekoladaQuantitiy = 0
    const CzekoladkaPrice = 55

var ImageIndex = 1
 


function AddKoszt(cena,ilosc)
{
    LacznyKoszt = LacznyKoszt + cena *ilosc
    if(LacznyKoszt < 0)
    {
        LacznyKoszt = 0
    }
}
function UpadtePreview()
{
    let CoUpdejtnac = document.getElementById("Zamówienia")

    CoUpdejtnac.innerHTML = "Łączny koszt: "+LacznyKoszt+" zł<br><br>Ciasto czekoladowe: "+CzekoladaQuantitiy+"<br>Ciasto borówkowe: "+BorowkaQuantitiy+"<br>Babeczka: "+BabeczkaQuantitiy
}

document.getElementById("DodajButton").addEventListener("click",function(){
    let select_val = document.getElementById("Przysmaki_types").value
    switch(select_val)
    {
        case "1": 
        {
            let ilosc_val = document.getElementById("ilosc").value
            if(ilosc_val == "")
            {
                ilosc_val = 0
            }
            console.log(select_val)
            console.log("Czekoladka")
            if(ilosc_val < -1*CzekoladaQuantitiy){
                ilosc_val = -1*CzekoladaQuantitiy
            }
            AddKoszt(CzekoladkaPrice,ilosc_val)
            console.log(LacznyKoszt)
            CzekoladaQuantitiy = CzekoladaQuantitiy + parseInt(ilosc_val) 

            if(CzekoladaQuantitiy < 0)
            {
                CzekoladaQuantitiy = 0
            }

            UpadtePreview()
            break
        }
        case "2": 
        {
            let ilosc_val = document.getElementById("ilosc").value
            if(ilosc_val == "")
            {
                ilosc_val = 0
            }
            console.log(select_val)
            console.log("Boroweczka")
            if(ilosc_val < -1*BorowkaQuantitiy){
                ilosc_val = -1*BorowkaQuantitiy
            }
            AddKoszt(BorowkaPrice,ilosc_val)
            console.log(LacznyKoszt)

            BorowkaQuantitiy = BorowkaQuantitiy + parseInt(ilosc_val) 
            if(BorowkaQuantitiy < 0)
            {
                BorowkaQuantitiy = 0
            }


            UpadtePreview()

            break
        }
        case "3": 
        {
            let ilosc_val = document.getElementById("ilosc").value
            if(ilosc_val == "")
            {
                ilosc_val = 0
            }
            
            console.log(select_val)
            console.log("Babeczka")
            if(ilosc_val < -1*BabeczkaQuantitiy){
                ilosc_val = -1*BabeczkaQuantitiy
            }
            AddKoszt(BabeczkaPrice,ilosc_val)
            console.log(LacznyKoszt)
            BabeczkaQuantitiy = BabeczkaQuantitiy + parseInt(ilosc_val) 

            if(BabeczkaQuantitiy < 0)
            {
                BabeczkaQuantitiy = 0
            }

            UpadtePreview()

            break
        }
        default:
        {
            console.log(select_val)
            console.log("No co myślałesz, że coś tu będzie, no żeś się pomylił kolego")
            break
        }
    }
})
