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
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_7_4} />
      <View style={styles.View_7_5} />
      <View style={styles.View_7_6} />
      <View style={styles.View_7_7} />
      <View style={styles.View_7_8} />
      <View style={styles.View_7_9} />
      <View style={styles.View_7_10} />
      <View style={styles.View_7_11} />
      <View style={styles.View_7_12} />
      <View style={styles.View_7_13} />
      <View style={styles.View_7_14} />
      <View style={styles.View_7_15} />
      <View style={styles.View_7_16} />
      <View style={styles.View_7_17} />
      <View style={styles.View_7_18} />
      <View style={styles.View_7_19} />
      <View style={styles.View_7_20} />
      <View style={styles.View_7_21} />
      <View style={styles.View_7_22}>
        <Text style={styles.Text_7_22}>ShadeCard</Text>
      </View>
      <View style={styles.View_7_23}>
        <Text style={styles.Text_7_23}>Product of Daten and Wissen</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60ee9bd5-563b-436e-8244-51684e11edbf"
        }}
        style={styles.ImageBackground_7_24}
      />
      <View style={styles.View_7_25} />
      <View style={styles.View_7_26} />
      <View style={styles.View_7_27} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb2393f7-d2c1-4728-b478-ef533925fcb6"
        }}
        style={styles.ImageBackground_7_28}
      />
      <View style={styles.View_7_29}>
        <Text style={styles.Text_7_29}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1641a69a-c3b2-451c-a176-d577fb5e126a"
        }}
        style={styles.ImageBackground_7_30}
      />
      <View style={styles.View_7_31}>
        <Text style={styles.Text_7_31}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f201fa8-3fab-4e3c-9094-ae9a4f94eb51"
        }}
        style={styles.ImageBackground_7_32}
      />
      <View style={styles.View_7_33}>
        <Text style={styles.Text_7_33}>Cipla Info</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cb53ae9-92ec-439a-aeb7-2c911f81b3ae"
        }}
        style={styles.ImageBackground_7_34}
      />
      <View style={styles.View_7_35}>
        <Text style={styles.Text_7_35}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abf2e1f4-d4d6-438f-be50-c78f6cba0bee"
        }}
        style={styles.ImageBackground_7_36}
      />
      <View style={styles.View_7_37}>
        <Text style={styles.Text_7_37}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76fa32bd-d2f0-4d3c-aa36-b0202328810c"
        }}
        style={styles.ImageBackground_7_38}
      />
      <View style={styles.View_7_39}>
        <Text style={styles.Text_7_39}>Back</Text>
      </View>
      <View style={styles.View_7_40} />
      <View style={styles.View_7_41}>
        <Text style={styles.Text_7_41}>Choose PDF File</Text>
      </View>
      <View style={styles.View_7_42}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/316711ba-2559-49c0-b48d-6f8711f1837a"
          }}
          style={styles.ImageBackground_7_43}
        />
        <View style={styles.View_7_44} />
      </View>
      <View style={styles.View_7_45} />
      <View style={styles.View_7_46}>
        <View style={styles.View_7_47}>
          <Text style={styles.Text_7_47}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_48}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dff5fdc-3013-4def-8237-5e9e0f1efbc8"
            }}
            style={styles.ImageBackground_7_49}
          />
          <View style={styles.View_7_50} />
        </View>
      </View>
      <View style={styles.View_7_51} />
      <View style={styles.View_7_52}>
        <View style={styles.View_7_53}>
          <Text style={styles.Text_7_53}>Choose PDF File</Text>
        </View>
        <View style={styles.View_7_54}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abbae90b-1504-4536-8036-7525a235aef8"
            }}
            style={styles.ImageBackground_7_55}
          />
          <View style={styles.View_7_56} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_7_57}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_1642"))
        }
      />
      <View style={styles.View_7_58}>
        <View style={styles.View_7_59}>
          <Text style={styles.Text_7_59}>Select Path</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37ed16e5-1036-4fa9-867d-f24193c3249f"
        }}
        style={styles.ImageBackground_7_60}
      />
      <View style={styles.View_28_78} />
      <View style={styles.View_28_79}>
        <Text style={styles.Text_28_79}>Merged Files</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_28_80}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_1296"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_28_81}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("7_1296"))
        }
      >
        <Text style={styles.Text_28_81}>Select path Type</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba50949a-0c60-4014-9af6-b0a6ffd11efe"
        }}
        style={styles.ImageBackground_28_82}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_7_4: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("-4%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_5: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("7%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_6: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_7: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("35%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_8: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_9: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("21%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_10: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("7%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_11: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("23%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_12: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("7%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_13: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("78%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_14: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("68%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_15: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_16: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("67%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_17: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("38%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_7_18: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_19: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("59%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_7_20: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("32%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_21: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("78%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_7_22: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_7_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_23: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_7_23: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_24: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%")
  },
  View_7_25: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("10%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_7_26: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("49%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_7_27: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("49%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_7_28: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("55%")
  },
  View_7_29: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_29: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_30: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("55%")
  },
  View_7_31: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_31: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_32: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("13%")
  },
  View_7_33: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_7_33: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_34: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("55%")
  },
  View_7_35: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_7_35: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_36: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("53%")
  },
  View_7_37: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_7_37: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_38: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("53%")
  },
  View_7_39: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_7_39: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_40: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("85%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_41: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_7_41: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_42: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("86%")
  },
  ImageBackground_7_43: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_44: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.5
  },
  View_7_45: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("85%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_46: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("86%")
  },
  View_7_47: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_47: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_48: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_7_49: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_50: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.5
  },
  View_7_51: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("42%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.6000000238418579
  },
  View_7_52: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("43%")
  },
  View_7_53: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_53: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_54: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_7_55: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_56: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)",
    opacity: 0.5
  },
  TouchableOpacity_7_57: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("42%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_7_58: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("43%")
  },
  View_7_59: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_7_59: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_60: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("43%")
  },
  View_28_78: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("91%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  View_28_79: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_28_79: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_80: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("91%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  TouchableOpacity_28_81: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_28_81: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_82: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("93%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
