import { StyleSheet, FlatList, Button, TextInput, Text } from 'react-native';
import { View } from '../../components/Themed';
import ProductSearchCell from '../../components/search/ProductSearchCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../../types';


interface SearchScreen {

}

export default function SimulationTabScreen(props: SearchScreen) {

    let data = [
        {
            "id": "Afd33Dc324FfvcaS9385321xXdfg23",
            "ref": "UXF-2000",
            "image_url": "https://m.media-amazon.com/images/I/516GEnILBFL._AC_SX679_.jpg",
            "description": "Smart TV 4k with news AI features",
            "value": "3500000",
            "discount_percent": "0.05",
            "special_discount_percent": "0.15",
            "warehouse": "Exito"
        },
        {
            "id": "Afhfgr346VafagAFLAasee346643234",
            "ref": "Iphone SE 3",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9KRSvPS3mef6EX3yJ5MVf4MGIKAj0ZW0bEdSfYSqZEvXHfOm5Fxj74bCtcmgyN7xB9I&usqp=CAU",
            "description": "New Iphone special edition, It has a modern proccesor, 6gb RAM, 256GB",
            "value": "2500000",
            "discount_percent": "0.1",
            "special_discount_percent": "0.2",
            "warehouse": "Alkosto"
        },
        {
            "id": "fgjf3434HADH1352djhfjfXBDGHT",
            "ref": "PR100SD",
            "image_url": "https://cdn.coordiutil.com/imagen-olla_electrica_blackdecker_digital_de_6_litros_pr100sd-2114169-0-0-0-100.jpg",
            "description": "Olla A Presión Digital Multico BLACK & DECKER",
            "value": "599900",
            "discount_percent": "0.53",
            "special_discount_percent": "0.53",
            "warehouse": "Exito"
        },
        {
            "id": "jhkl56567HAFA32045477jfdfhSFF06",
            "ref": "HH-09227001SS",
            "image_url": "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3713486-512-512/813966029738-3.jpg?v=637550948431670000",
            "description": "Con la Freidora de Aire Digital con Doble Canasta de 7.6L puedes cocinar dos recetas independientes al mismo tiempo. Su funcionalidad 8 en 1 te permite: asar, hornear, freír, rostizar, deshidratar, dorar, precalentar y hacer papas fritas.",
            "value": "799900",
            "discount_percent": "0.37",
            "special_discount_percent": "0.4",
            "warehouse": "Exito"
        },
        {
            "id": "Afhfgr34dhhsrr234623HHHFJSA234",
            "ref": "198280",
            "image_url": "https://exitocol.vtexassets.com/arquivos/ids/8203693/JEAN-LEVIS-198280-1731720_c.jpg?v=637598478146100000",
            "description": "Este es el clásico y original pantalón de mezclilla. Este par viene elaborado con mezclilla premium selvedge, la cual proviene del borde del rollo del que se fabrican los jeans, por lo que le brinda un estilo único y exclusivo",
            "value": "209900",
            "discount_percent": "0.3",
            "special_discount_percent": "0.5",
            "warehouse": "Exito"
        },
        {
            "id": "s4646Dghhdhd4WE67Tgfdbdhddfh",
            "ref": "HP Intel Core i3-10110U",
            "image_url": "https://m.media-amazon.com/images/I/41c6RPG-+pL._AC_.jpg",
            "description": "Diseño delgado y ultra portable para mantenerte conectado y con todas las tareas bajo control. Con batería duradera y pantalla de borde delgado la HP Laptop es tu compañera perfecta",
            "value": "3099000",
            "discount_percent": "0.51",
            "special_discount_percent": "0.52",
            "warehouse": "Exito"
        },
        {
            "id": "FA7FAG77777SgSGSGSgs7ggwg39ggGG",
            "ref": "LENOVO Athlon Silver 3050U",
            "image_url": "https://oasify.com/wp-content/uploads/2021/07/82C6001ELM-1.jpg",
            "description": "Una laptop accesible que no ralentiza tu trabajo",
            "value": "1899000",
            "discount_percent": "0.27",
            "special_discount_percent": "0.33",
            "warehouse": "Exito"
        },
        {
            "id": "SDGJ65AFSFYEggddhd4464e6j7t",
            "ref": "Morral Para Hombre NIKE BA5954",
            "image_url": "https://exitocol.vtexassets.com/arquivos/ids/4945914-800-auto?v=637405271692830000&width=800&height=auto&aspect=true",
            "description": "Morral con cierres, cargaderas , sujetador superior corto , compartimiento lateral enmallado",
            "value": "259990",
            "discount_percent": "0.3",
            "special_discount_percent": "0.5",
            "warehouse": "Exito"
        },
        {
            "id": "sgskjs3424376ssAjfafafffagSGDGSDDHHJHL",
            "ref": "SE 3",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2YSbkWwj-nBZ1K24YAaqn0Wf6ZQZo-RdNQwhQk55Gxc-v0Mm7abCU57mmIYEMe8rBFA&usqp=CAU",
            "description": "Camiseta cuello redondo , manga amplia, 100% algodon",
            "value": "99990",
            "discount_percent": "0.3",
            "special_discount_percent": "0.5",
            "warehouse": "Exito"
        },
        {
            "id": "346DSDSAJHSvxxcncnlASFA34376420sdgsgjh",
            "ref": "Camiseta Manga Sisa EVERLAST EV49XAL529",
            "image_url": "https://carulla.vtexassets.com/arquivos/ids/6665950-800-auto?v=637742886286100000&width=800&height=auto&aspect=true",
            "description": "Camiseta corta , cuello redondo, efecto de cruce en frente, 100% poliester",
            "value": "69900",
            "discount_percent": "0.3",
            "special_discount_percent": "0.5",
            "warehouse": "Exito"
        },
        {
            id: 1,
            ref: "TV LG 55 pulgadas",
            image_url: "https://olimpica.vtexassets.com/arquivos/ids/474490/Televisor-LED-FHD-OLIMPO-Smartv-101CM-40--40D3200S.jpg?v=637497819260800000",
            description: "Televisor de 55 pulgadas marca LG",
            value: 1200000,
            discount_percent: 0.1,
            special_discount_percent: 0.2,
            warehouse: "warehouse",
        },
        {
            id: 2,
            ref: "LG OLED 40 pulgadas 4k",
            image_url: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
            description: "Televisor de 40 pulgadas marca LG",
            value: 1100000,
            discount_percent: 0.2,
            special_discount_percent: 0.4,
            warehouse: "warehouse2",
        }
    ];

    const [products, setProducts] = useState(data)

    const handleInputChange = (text) => {
        setProducts(data.filter((item) => item.ref.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <View style={styles.container}>
            <View style={
                {
                    width: '100%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 10,
                    elevation: 10,
                    paddingBottom: 10
                }
            }>
                <View style={styles.SearchBarContainer}>
                    <TextInput style={styles.SearchBar} onChangeText={text => handleInputChange(text)} />
                </View>
            </View>

            <FlatList
                data={products}
                style={styles.list}
                renderItem={(item) => <ProductSearchCell data={item} navigation={props.navigation} />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        width: '100%',
    },
    SearchBar: {
        borderColor: '#000000',
        width: '80%'
    },
    SearchBarContainer: {
        width: '80%',
        borderColor: 'black',
        marginTop: 10,
        borderWidth: 2,
        alignSelf: 'center',
    }
});
