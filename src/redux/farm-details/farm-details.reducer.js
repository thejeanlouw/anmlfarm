const INITIAL_STATE = {
    selectedFarm: 'FRM1',
    connectedFarms: {
        FRM1: {
            id: 'FRM1',
            farmName: 'Stoney Farm',
            farmCompanyName:'Louw Steenkamp Sole Proprietor',
            farmCompanyRegistration: 'N\\A',
            farmPhotoUrl: 'https://static9.depositphotos.com/1086305/1152/i/950/depositphotos_11527878-stock-photo-traditional-vintage-red-farm.jpg',
            farmGeolocation: '-25.75768355795509, 28.50473620747359',
            farmOwnerIds: ['1'],
            farmWorkerIds: ['1','2'],
            farmManagerIds: ['1','2'],
            farmPartnerIds: ['1','2'],
            farmProductSalesRepresentitive: '0',
            farmVisibility: 'anonymous',
            farmEquipment: {
                EQ1: {
                    id: 'EQ1',
                    type: 'animal-gps-tracker',
                    payloadHistory: {
                        PL1A: {
                            id: 'PL1A',
                            timeStamp: 100,
                            geolocation: '-25.75768355795509, 28.50473620747359'}
                        }
                }
            }
        }
    }
    
}

const farmsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default farmsReducer;