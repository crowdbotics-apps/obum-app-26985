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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a8/dc36/f9d9c479a8e6e0cd7c75e8e5f298295a"
        }}
        style={styles.ImageBackground_250_36}
      />
      <View style={styles.View_250_37}>
        <Text style={styles.Text_250_37}>
          Help the childern of Ikorodu for better education{" "}
        </Text>
      </View>
      <View style={styles.View_250_38} />
      <View style={styles.View_250_39}>
        <Text style={styles.Text_250_39}>Verified Foundation</Text>
      </View>
      <View style={styles.View_250_40}>
        <Text style={styles.Text_250_40}>World Health</Text>
      </View>
      <View style={styles.View_250_42}>
        <Text style={styles.Text_250_42}>Donation target</Text>
      </View>
      <View style={styles.View_250_43}>
        <View style={styles.View_I250_43_87_14} />
        <View style={styles.View_I250_43_87_15} />
      </View>
      <View style={styles.View_250_44}>
        <Text style={styles.Text_250_44}>10</Text>
      </View>
      <View style={styles.View_250_45}>
        <Text style={styles.Text_250_45}> / 30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c77/b88e/6cb9889c573ffe8af9e72367998ad192"
        }}
        style={styles.ImageBackground_250_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c77/b88e/6cb9889c573ffe8af9e72367998ad192"
        }}
        style={styles.ImageBackground_250_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c77/b88e/6cb9889c573ffe8af9e72367998ad192"
        }}
        style={styles.ImageBackground_250_48}
      />
      <View style={styles.View_250_61}>
        <View style={styles.View_250_64}>
          <Text style={styles.Text_250_64}>Donate now</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b8/06b0/68bdf8601a5ae020c4112a9f034091f4"
        }}
        style={styles.ImageBackground_250_67}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_250_36: {
    width: wp("74.8792270531401%"),
    minWidth: wp("74.8792270531401%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("10.92896174863388%")
  },
  View_250_37: {
    width: wp("81.64251207729468%"),
    minWidth: wp("81.64251207729468%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("35.24590163934426%")
  },
  Text_250_37: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_38: {
    width: wp("74.63768115942028%"),
    minWidth: wp("74.63768115942028%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("51.09289617486339%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_250_39: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("56.01092896174863%")
  },
  Text_250_39: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_40: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("53.14207650273224%")
  },
  Text_250_40: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_42: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("67.07650273224044%")
  },
  Text_250_42: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_43: {
    width: wp("51.93236714975845%"),
    minWidth: wp("51.93236714975845%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("75.13661202185791%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I250_43_87_14: {
    flexGrow: 1,
    width: wp("51.93236714975845%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_I250_43_87_15: {
    flexGrow: 1,
    width: wp("14.647590710920987%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 62, 101, 1)"
  },
  View_250_44: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    top: hp("72.95081967213115%")
  },
  Text_250_44: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_250_45: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.26086956521739%"),
    top: hp("72.95081967213115%")
  },
  Text_250_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_250_46: {
    width: wp("74.63768115942028%"),
    minWidth: wp("74.63768115942028%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("82.10382513661202%")
  },
  ImageBackground_250_47: {
    width: wp("74.63768115942028%"),
    minWidth: wp("74.63768115942028%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("63.661202185792355%")
  },
  ImageBackground_250_48: {
    width: wp("74.63768115942028%"),
    minWidth: wp("74.63768115942028%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("47.6775956284153%")
  },
  View_250_61: {
    width: wp("75.84541062801932%"),
    height: hp("11.202185792349727%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_250_64: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.724637681159415%"),
    top: hp("3.210382513661216%")
  },
  Text_250_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_250_67: {
    width: wp("4.830917874396135%"),
    height: hp("2.3224043715846996%"),
    top: hp("53.41530054644809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
