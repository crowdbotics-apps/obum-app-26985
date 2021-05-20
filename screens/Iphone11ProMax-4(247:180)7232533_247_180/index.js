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
      <View style={styles.View_247_184}>
        <View style={styles.View_247_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ebd/fa5c/120adee4f5948de7978276ffb8f5d984"
            }}
            style={styles.ImageBackground_247_186}
          />
        </View>
        <View style={styles.View_247_189}>
          <Text style={styles.Text_247_189}>Search</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("247_181"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba2/b718/3abee7c93cc1ce21e68f278b6e209857"
          }}
          style={styles.ImageBackground_247_191}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85dc/0ab7/d9155deccba0b8ca908394f6ba236331"
        }}
        style={styles.ImageBackground_247_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5017/255f/9224890c1b2c34b39393b215b42e017c"
        }}
        style={styles.ImageBackground_247_195}
      />
      <View style={styles.View_248_37}>
        <Text style={styles.Text_248_37}>World Health Foundation</Text>
      </View>
      <View style={styles.View_248_38}>
        <Text style={styles.Text_248_38}>Maryland Charity Orgainaization </Text>
      </View>
      <View style={styles.View_248_39}>
        <Text style={styles.Text_248_39}>The Lord’s Children</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("154_78"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bd5/be41/c0470e106438d987de2d1b6fb3d5a58b"
          }}
          style={styles.ImageBackground_340_686}
        />
      </TouchableOpacity>
      <View style={styles.View_373_682}>
        <Text style={styles.Text_373_682}>Support A Cause</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_247_184: {
    width: wp("74.63768115942028%"),
    minWidth: wp("74.63768115942028%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("10.792349726775956%"),
    backgroundColor: "rgba(247, 250, 255, 1)"
  },
  View_247_185: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("1.5027322404371581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_247_186: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_247_189: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("1.2295081967213104%")
  },
  Text_247_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_247_191: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("20.901639344262296%"),
    minHeight: hp("20.901639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("26.639344262295083%")
  },
  ImageBackground_247_194: {
    width: wp("87.92270531400966%"),
    minWidth: wp("87.92270531400966%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("85.79234972677595%")
  },
  ImageBackground_247_195: {
    width: wp("87.92270531400966%"),
    minWidth: wp("87.92270531400966%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("55.32786885245902%")
  },
  View_248_37: {
    width: wp("47.58454106280193%"),
    minWidth: wp("47.58454106280193%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("49.86338797814208%")
  },
  Text_248_37: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_38: {
    width: wp("61.59420289855072%"),
    minWidth: wp("61.59420289855072%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("80.32786885245902%")
  },
  Text_248_38: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_39: {
    width: wp("36.231884057971016%"),
    minWidth: wp("36.231884057971016%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("110.65573770491804%")
  },
  Text_248_39: {
    color: "rgba(48, 62, 101, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_340_686: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%")
  },
  View_373_682: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.40096618357488%"),
    top: hp("21.03825136612022%")
  },
  Text_373_682: {
    color: "rgba(50, 201, 249, 1)",
    fontSize: 15,
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
