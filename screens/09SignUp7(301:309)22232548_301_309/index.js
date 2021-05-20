import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_301_310}>
        <View style={styles.View_I301_310_301_10}>
          <View style={styles.View_I301_310_301_11} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24cb/6ae5/37bf546194989d63627a392d13125a38"
            }}
            style={styles.ImageBackground_I301_310_301_12}
          />
          <View style={styles.View_I301_310_301_13} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88a/ded7/f41dec7843b5fcad7f7bdcd0d1fba7b9"
          }}
          style={styles.ImageBackground_I301_310_301_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7587/2345/81cfec30b2ed2737e555bd1c76f92635"
          }}
          style={styles.ImageBackground_I301_310_301_18}
        />
        <View style={styles.View_I301_310_301_23}>
          <View style={styles.View_I301_310_301_24}>
            <Text style={styles.Text_I301_310_301_24}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_301_311}>
        <Text style={styles.Text_301_311}>Confirming, please hold on...</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c335/ffa1/7513a2fdf36aee1f21dbc60e540c49b7"
        }}
        style={styles.ImageBackground_301_312}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_301_310: {
    width: wp("100%"),
    height: hp("6.632749630453808%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_310_301_10: {
    flexGrow: 1,
    width: wp("6.487476883303141%"),
    height: hp("1.7084356214179368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.68889171950482%"),
    top: hp("2.6129050332991803%")
  },
  View_I301_310_301_11: {
    width: wp("5.866657938934178%"),
    height: hp("1.7084356214179368%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I301_310_301_12: {
    width: wp("0.35415133416364736%"),
    height: hp("0.602977262820051%"),
    top: hp("0.5527183657786883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133325549139499%")
  },
  View_I301_310_301_13: {
    width: wp("4.800002240904287%"),
    height: hp("1.1054586191646387%"),
    top: hp("0.30147364882172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333278490149524%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I301_310_301_14: {
    flexGrow: 1,
    width: wp("4.088876328030646%"),
    height: hp("1.6581905344144894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666996905193%"),
    top: hp("2.6125048027663933%")
  },
  ImageBackground_I301_310_301_18: {
    flexGrow: 1,
    width: wp("4.533334630698974%"),
    height: hp("1.6079412783429923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999728732639%"),
    top: hp("2.6631339651639343%")
  },
  View_I301_310_301_23: {
    flexGrow: 1,
    width: wp("14.400001194166101%"),
    height: hp("3.165630434380203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599997700124547%"),
    top: hp("1.055207799692623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_310_301_24: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.819672131147541%")
  },
  Text_I301_310_301_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_301_311: {
    width: wp("74.66667285863903%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%")
  },
  Text_301_311: {
    color: "rgba(16, 16, 16, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_301_312: {
    width: wp("21.866670322878925%"),
    height: hp("12.361036623761953%"),
    top: hp("55.021659142332645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333103345788%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
