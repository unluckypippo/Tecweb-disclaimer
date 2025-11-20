function changeLanguage() {
    const lang = document.getElementById('language').value;
    
    const content = {
        it: {
            message: "I prodotti presenti su questo sito sono destinati esclusivamente ad un pubblico adulto e maggiorenne, secondo le leggi vigenti nel paese di residenza.",
            info:"Promuoviamo un consumo responsabile e moderato degli alcolici. L'abuso di bevande alcoliche è dannoso per la salute. Vi invitiamo a consultare le linee guida del Ministero della Salute o di enti competenti per informazioni sui consumi raccomandati. Non bere e guidare. Lo stato di ebbrezza alla guida è estremamente pericoloso per sé e per gli altri ed è severamente punito dalla legge. Se bevete, designate un conducente sobrio o utilizzate mezzi alternativi. Il cliente è l'unico responsabile della verifica della propria idoneità al consumo di bevande alcoliche, anche in relazione a condizioni di salute, gravidanza, allattamento o assunzione di farmaci. Si consiglia di consultare un medico in caso di dubbi. Scopri di più al seguente indirizzo:"
        },
        en: {
            message: "The products on this website are intended exclusively for an adult audience of legal age, in accordance with the laws in force in the country of residence.",
            info:"We promote responsible and moderate alcohol consumption. The abuse of alcoholic beverages is harmful to your health. We invite you to consult the guidelines of the Ministry of Health or other competent authorities for information on recommended consumption. Do not drink and drive. Driving under the influence is extremely dangerous for yourself and others and is strictly punished by law. If you drink, designate a sober driver or use alternative transportation. The customer is solely responsible for verifying their own suitability for consuming alcoholic beverages, including in relation to health conditions, pregnancy, breastfeeding, or the use of medications. In case of doubt, it is advisable to consult a doctor. Find out more at the following link:"
        },
        es: {
            message: "Los productos presentes en este sitio están destinados exclusivamente a un público adulto y mayor de edad, de acuerdo con las leyes vigentes en el país de residencia.",
            info:"Promovemos un consumo responsable y moderado de bebidas alcohólicas. El abuso de bebidas alcohólicas es perjudicial para la salud. Le invitamos a consultar las directrices del Ministerio de Salud o de los organismos competentes para obtener información sobre los consumos recomendados. No bebas y conduzcas. Conducir en estado de ebriedad es extremadamente peligroso para uno mismo y para los demás, y está severamente castigado por la ley. Si bebes, designa a un conductor sobrio o utiliza medios de transporte alternativos. El cliente es el único responsable de verificar su propia idoneidad para el consumo de bebidas alcohólicas, también en relación con condiciones de salud, embarazo, lactancia o la toma de medicamentos. En caso de duda, se aconseja consultar a un médico. Descubre más en la siguiente dirección:"
        }
        
    };

    // Update the text based on the selected language
    document.getElementById('message').innerText = content[lang].message;
    document.getElementById('info').innerText = content[lang].info;
}
