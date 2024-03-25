import { Text, Image } from 'react-native'

export function User({firstname, lastname, age , isVerified, adress}){
    return <>
        <Image
            style={{height: 200 ,widht : 300}}
            source={{uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Text>
            Mon nom est {firstname} et mon nom est {lastname}.{'\n'}
            Mon âge est de {age} ans. {'\n'}
            {isVerified ? 'Compte vérifier': "Compte pas vérifié"}
        </Text>
        <Text>
            Mon adresse est : {adress.street} qui est situé à {adress.city}
        </Text>
        </>

}