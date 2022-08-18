import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.Botes}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>

    )
}

const styles = StyleSheet.create({
    Botes: {
        flexDirection: "row"
    }
})