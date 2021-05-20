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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd65/4920/0bbc330dfb6f367ad0700b61f541e570"
        }}
        style={styles.ImageBackground_134_109}
      />
      <View style={styles.View_134_134} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98e5/8ea9/74b520a3a6a1dcc87018e061982812b9"
        }}
        style={styles.ImageBackground_134_141}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("355_1"))
        }
      >
        <View style={styles.View_134_137}>
          <View style={styles.View_134_139}>
            <Text style={styles.Text_134_139}>Get Location details</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_134_144}>
        <Text style={styles.Text_134_144}>Candid store</Text>
      </View>
      <View style={styles.View_134_145}>
        <Text style={styles.Text_134_145}>606, Heffer Road</Text>
      </View>
      <View style={styles.View_356_2}>
        <View style={styles.View_356_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ebd/fa5c/120adee4f5948de7978276ffb8f5d984"
            }}
            style={styles.ImageBackground_356_4}
          />
        </View>
        <View style={styles.View_356_7}>
          <Text style={styles.Text_356_7}>Search</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("154_78"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd9a/c4c2/6c23da64bf092f67af58d37c3bb07e76"
          }}
          style={styles.ImageBackground_356_8}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("154_78"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae0/7b42/042e98d65b67e3633b68448a2d2c19a8"
          }}
          style={styles.ImageBackground_356_1}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_134_109: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_134_134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92.4863387978142%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_134_141: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("96.44808743169399%")
  },
  View_134_137: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("110.65573770491804%"),
    backgroundColor: "rgba(50, 201, 249, 1)",
    overflow: "hidden"
  },
  View_134_139: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.309178743961354%"),
    top: hp("1.7076502732240328%")
  },
  Text_134_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_144: {
    width: wp("29.951690821256037%"),
    minWidth: wp("29.951690821256037%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("95.08196721311475%")
  },
  Text_134_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_145: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("99.72677595628416%")
  },
  Text_134_145: {
    color: "rgba(210, 208, 208, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_356_2: {
    width: wp("72.94685990338165%"),
    minWidth: wp("72.94685990338165%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342994%"),
    top: hp("6.557377049180328%"),
    backgroundColor: "rgba(247, 250, 255, 1)"
  },
  View_356_3: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8985507246376834%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_356_4: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_356_7: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("1.2295081967213113%")
  },
  Text_356_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_356_8: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("6.284153005464481%")
  },
  ImageBackground_356_1: {
    width: wp("7.004830917874397%"),
    height: hp("2.73224043715847%"),
    top: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
