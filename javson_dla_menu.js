var LacznyKoszt = 0

var BabeczkaQuantitiy = 0
    const BabeczkaPrice = 9
var BorowkaQuantitiy = 0
    const BorowkaPrice = 40
var CzekoladaQuantitiy = 0
    const CzekoladkaPrice = 55

var ImageIndex = 1
 

function ChangeImage(plus_or_minus)
{


    ImageIndex = ImageIndex + plus_or_minus
    var Opis = document.getElementById("Opis_przysmaku")
    var Przysmak_Image = document.getElementById("img_przysmak")

    if(ImageIndex == 0)
    {
        ImageIndex = 3
    }
    else if(ImageIndex == 4)
    {
        ImageIndex = 1
    }

    switch(ImageIndex)
    {
        case 1:
        {
            //CZEKOLADKA
            Opis.innerHTML = "Nazwa: Ciasto czekoladowe <br>Opis: Brązowa czekolada, dziwnie okrągłe wisienki i 100% jadalna świeczka<br>(nie próbuj)<br>Cena: 55 zł<br>"
            Przysmak_Image.src = "Ciasto_czekoladowe.jpg"

            break
        }
        case 2:
        {
            //BOROWECZKA
            Opis.innerHTML = "Nazwa: Ciasto borówkowe <br>Opis: Niebieściutka delikacja z dodatkiem gruzu prosto z trawy<br>(mniam mniam)<br>Cena: 40 zł<br> "
            Przysmak_Image.src = "Ciasto_borowkowe.jpg"
            break
        }
        case 3:
        {
            //BABECZKA
            Opis.innerHTML = "Nazwa: Babeczka <br>Opis: Smak nieznany (pytajta się <b>MEL LONA</b><br>(I guess smakuje niebiesko)<br>Cena: 9 zł<br> "
            Przysmak_Image.src = "babeczka.jpg"
            break
        }
        default:
        {
            console.log("kochany, co ty odwaliłeś?")    
            break
        }
    }

}
// function AddKoszt(cena,ilosc)
// {
//     LacznyKoszt = LacznyKoszt + cena *ilosc
//     if(LacznyKoszt < 0)
//     {
//         LacznyKoszt = 0
//     }
// }
// function UpadtePreview()
// {
//     let CoUpdejtnac = document.getElementById("Zamówienia")

//     CoUpdejtnac.innerHTML = "Łączny koszt: "+LacznyKoszt+" zł<br><br>Ciasto czekoladowe: "+CzekoladaQuantitiy+"<br>Ciasto borówkowe: "+BorowkaQuantitiy+"<br>Babeczka: "+BabeczkaQuantitiy
// }

// document.getElementById("DodajButton").addEventListener("click",function(){
//     let select_val = document.getElementById("Przysmaki_types").value
//     switch(select_val)
//     {
//         case "1": 
//         {
//             let ilosc_val = document.getElementById("ilosc").value
//             if(ilosc_val == "")
//             {
//                 ilosc_val = 0
//             }
//             console.log(select_val)
//             console.log("Czekoladka")

//             AddKoszt(CzekoladkaPrice,ilosc_val)
//             console.log(LacznyKoszt)
//             CzekoladaQuantitiy = CzekoladaQuantitiy + parseInt(ilosc_val) 

//             if(CzekoladaQuantitiy < 0)
//             {
//                 CzekoladaQuantitiy = 0
//             }

//             UpadtePreview()
//             break
//         }
//         case "2": 
//         {
//             if(ilosc_val == "")
//             {
//                 ilosc_val = 0
//             }
//             let ilosc_val = document.getElementById("ilosc").value
//             console.log(select_val)
//             console.log("Boroweczka")

//             AddKoszt(BorowkaPrice,ilosc_val)
//             console.log(LacznyKoszt)

//             BorowkaQuantitiy = BorowkaQuantitiy + parseInt(ilosc_val) 
//             if(BorowkaQuantitiy < 0)
//             {
//                 BorowkaQuantitiy = 0
//             }


//             UpadtePreview()

//             break
//         }
//         case "3": 
//         {
//             if(ilosc_val == "")
//             {
//                 ilosc_val = 0
//             }
//             let ilosc_val = document.getElementById("ilosc").value
//             console.log(select_val)
//             console.log("Babeczka")

//             AddKoszt(BabeczkaPrice,ilosc_val)
//             console.log(LacznyKoszt)
//             BabeczkaQuantitiy = BabeczkaQuantitiy + parseInt(ilosc_val) 

//             if(BabeczkaQuantitiy < 0)
//             {
//                 BabeczkaQuantitiy = 0
//             }

//             UpadtePreview()

//             break
//         }
//         default:
//         {
//             console.log(select_val)
//             console.log("No co myślałesz, że coś tu będzie, no żeś się pomylił kolego")
//             break
//         }
//     }
// })

// document.getElementById("prawa").addEventListener("click",ChangeImage(1))
// document.getElementById("lewa").addEventListener("click",ChangeImage(-1))