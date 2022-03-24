import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    items: Array<string>
}

const SearchScreen = (props: Props) => {


    return (
        <View>
            <View>
                <TextInput />
            </View>

            <View>
                <TouchableOpacity onPress={() => console.log('added to cart')}>
                    <View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('added to cart')}>
                    <View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SearchScreen