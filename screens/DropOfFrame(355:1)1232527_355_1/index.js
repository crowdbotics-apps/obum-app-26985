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
      <View style={styles.View_355_0}>
        <View style={styles.View_148_1} />
        <View style={styles.View_142_26}>
          <Text style={styles.Text_142_26}>Chevron, Lekki</Text>
        </View>
        <View style={styles.View_142_27}>
          <Text style={styles.Text_142_27}>07044375224</Text>
        </View>
        <View style={styles.View_142_28}>
          <Text style={styles.Text_142_28}>candidstore@yahoo.com</Text>
        </View>
        <View style={styles.View_142_29}>
          <Text style={styles.Text_142_29}>09:00am - 17:00pm</Text>
        </View>
        <View style={styles.View_142_30}>
          <Text style={styles.Text_142_30}>No 42, Uba Road</Text>
        </View>
        <View style={styles.View_142_32}>
          <Text style={styles.Text_142_32}>Contact info</Text>
        </View>
        <View style={styles.View_142_46}>
          <View style={styles.View_142_48}>
            <Text style={styles.Text_142_48}>Get Location details</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d772/7dc6/f938aaa9b45409095499a1ce6a3b3e9f"
          }}
          style={styles.ImageBackground_142_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c5/f8ac/a3ada67c51dfee273c7daefe449c3a27"
          }}
          style={styles.ImageBackground_142_57}
        />
      </View>
      <View style={styles.View_147_0}>
        <Text style={styles.Text_147_0}>Open Now</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_355_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_148_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_142_26: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("5.743740795287187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("6.185567010309279%")
  },
  Text_142_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_27: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("6.0382916053019144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("38.43888070692195%")
  },
  Text_142_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_28: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    minHeight: hp("5.743740795287187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("43.888070692194404%")
  },
  Text_142_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_29: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    minHeight: hp("6.0382916053019144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("22.23858615611193%")
  },
  Text_142_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_30: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("2.6509572901325478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("13.107511045655377%")
  },
  Text_142_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_32: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.6509572901325478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("35.7879234167894%")
  },
  Text_142_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_46: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("7.069219440353461%"),
    minHeight: hp("7.069219440353461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("84.83063328424153%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_142_48: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    minHeight: hp("5.154639175257731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.154589371980677%"),
    top: hp("0.9572901325478682%")
  },
  Text_142_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_142_53: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("21.502209131075112%"),
    minHeight: hp("21.502209131075112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("56.84830633284241%")
  },
  ImageBackground_142_57: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("8.689248895434462%"),
    minHeight: hp("8.689248895434462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.67149758454107%"),
    top: hp("7.069219440353461%")
  },
  View_147_0: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("3.3873343151693667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("28.276877761413843%")
  },
  Text_147_0: {
    color: "rgba(18, 235, 14, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
