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
      <View style={styles.View_236_20}>
        <Text style={styles.Text_236_20}>Create account</Text>
      </View>
      <View style={styles.View_236_28} />
      <View style={styles.View_236_44} />
      <View style={styles.View_236_29}>
        <View style={styles.View_236_30}>
          <Text style={styles.Text_236_30}>Email</Text>
        </View>
      </View>
      <View style={styles.View_236_45}>
        <View style={styles.View_236_46}>
          <Text style={styles.Text_236_46}>Name</Text>
        </View>
      </View>
      <View style={styles.View_236_31} />
      <View style={styles.View_236_32}>
        <View style={styles.View_236_33}>
          <Text style={styles.Text_236_33}>Password</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30b8/cccb/94d324f39a2099c98d6833355dcd252a"
        }}
        style={styles.ImageBackground_236_34}
      />
      <View style={styles.View_236_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78b0/1be0/e604f3d9ee9e6a8cbad2669544b1917c"
          }}
          style={styles.ImageBackground_236_37}
        />
        <View style={styles.View_236_39}>
          <Text style={styles.Text_236_39}>
            I agree with our Terms and Conditions
          </Text>
        </View>
      </View>
      <View style={styles.View_236_43}>
        <Text style={styles.Text_236_43}>Already have an account? Sign in</Text>
      </View>
      <View style={styles.View_238_34}>
        <View style={styles.View_238_35}>
          <Text style={styles.Text_238_35}>Create Account</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_236_20: {
    flexGrow: 1,
    width: wp("82.85024154589372%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("17.759562841530055%")
  },
  Text_236_20: {
    color: "rgba(50, 201, 249, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_236_28: {
    flexGrow: 1,
    width: wp("87.43961352657004%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(199, 199, 199, 1)",
    borderWidth: 1
  },
  View_236_44: {
    flexGrow: 1,
    width: wp("87.43961352657004%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("34.2896174863388%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(199, 199, 199, 1)",
    borderWidth: 1
  },
  View_236_29: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_236_30: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.6830601092896131%")
  },
  Text_236_30: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_45: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("34.83606557377049%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_236_46: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990339%"),
    top: hp("0.6830601092896202%")
  },
  Text_236_46: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_31: {
    flexGrow: 1,
    width: wp("88.64734299516908%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("57.513661202185794%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(199, 199, 199, 1)",
    borderWidth: 1
  },
  View_236_32: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("59.01639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_236_33: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3285024154589369%"),
    top: hp("0.6830601092896273%")
  },
  Text_236_33: {
    color: "rgba(113, 113, 113, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_236_34: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("60.5191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.71497584541062%")
  },
  View_236_36: {
    width: wp("82.85024154589372%"),
    minWidth: wp("82.85024154589372%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("73.49726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_236_37: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_236_39: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.76328502415459%"),
    top: hp("0.4098360655737707%")
  },
  Text_236_39: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_236_43: {
    flexGrow: 1,
    width: wp("82.85024154589372%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("99.4535519125683%")
  },
  Text_236_43: {
    color: "rgba(142, 142, 147, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_238_34: {
    flexGrow: 1,
    width: wp("88.40579710144928%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_238_35: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.898550724637683%"),
    top: hp("2.868852459016395%")
  },
  Text_238_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
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
