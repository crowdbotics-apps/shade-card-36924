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
      <View style={styles.View_327_427} />
      <View style={styles.View_327_428} />
      <View style={styles.View_327_429} />
      <View style={styles.View_327_430} />
      <View style={styles.View_327_431} />
      <View style={styles.View_327_432} />
      <View style={styles.View_327_433} />
      <View style={styles.View_327_434} />
      <View style={styles.View_327_435} />
      <View style={styles.View_327_436} />
      <View style={styles.View_327_437} />
      <View style={styles.View_327_438} />
      <View style={styles.View_327_439} />
      <View style={styles.View_327_440} />
      <View style={styles.View_327_441} />
      <View style={styles.View_327_442} />
      <View style={styles.View_327_443} />
      <View style={styles.View_327_444} />
      <View style={styles.View_327_445} />
      <View style={styles.View_327_446} />
      <View style={styles.View_327_447} />
      <View style={styles.View_327_448} />
      <View style={styles.View_327_449} />
      <View style={styles.View_327_450} />
      <View style={styles.View_327_451} />
      <View style={styles.View_327_452} />
      <View style={styles.View_327_453} />
      <View style={styles.View_327_454} />
      <View style={styles.View_327_455} />
      <View style={styles.View_327_456} />
      <View style={styles.View_327_457} />
      <View style={styles.View_327_458} />
      <View style={styles.View_327_459} />
      <View style={styles.View_327_460} />
      <View style={styles.View_327_461}>
        <Text style={styles.Text_327_461}>ShadeCard</Text>
      </View>
      <View style={styles.View_327_462}>
        <Text style={styles.Text_327_462}>Product of Laxmi PrintArt</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/047c736d-3140-4eed-b80d-baa959940b49"
        }}
        style={styles.ImageBackground_327_463}
      />
      <View style={styles.View_327_464} />
      <View style={styles.View_327_465} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06b6619f-989c-4524-a703-673ad6367a48"
        }}
        style={styles.ImageBackground_327_466}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d629b499-1c8a-4fb7-be96-7b3bf97c2d6b"
        }}
        style={styles.ImageBackground_327_467}
      />
      <View style={styles.View_327_468}>
        <Text style={styles.Text_327_468}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bf973f2-eddb-4b5a-a94d-f43df92824cc"
        }}
        style={styles.ImageBackground_327_469}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f98e111f-dddf-40f8-84ca-03f2382dd034"
        }}
        style={styles.ImageBackground_327_470}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8d73c69-45a1-4856-b9ed-9b6fb60a6bff"
        }}
        style={styles.ImageBackground_327_471}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23e18e21-bacf-46d3-ad57-2f7ab566a98e"
        }}
        style={styles.ImageBackground_327_472}
      />
      <View style={styles.View_327_473}>
        <Text style={styles.Text_327_473}>Dark</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/767f5b25-bbb5-4a76-8d3e-b17a234070b9"
        }}
        style={styles.ImageBackground_327_474}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9999dc67-daab-438c-bef7-2376c2d865d8"
        }}
        style={styles.ImageBackground_327_475}
      />
      <View style={styles.View_327_476}>
        <Text style={styles.Text_327_476}>Front</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89223f09-d47b-4232-bd2a-b2e96b022129"
        }}
        style={styles.ImageBackground_327_477}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2868d592-69b7-4341-9a5f-cd35349c4704"
        }}
        style={styles.ImageBackground_327_478}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/728a1772-ccf1-4f7e-878d-573e908a2228"
        }}
        style={styles.ImageBackground_327_479}
      />
      <View style={styles.View_327_480}>
        <Text style={styles.Text_327_480}>Back</Text>
      </View>
      <View style={styles.View_327_481} />
      <View style={styles.View_327_482}>
        <Text style={styles.Text_327_482}>Choose PDF File</Text>
      </View>
      <View style={styles.View_327_483}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9afdbf4-282a-4e03-bac9-b8a703ad3e54"
          }}
          style={styles.ImageBackground_327_484}
        />
        <View style={styles.View_327_485} />
      </View>
      <View style={styles.View_327_486} />
      <View style={styles.View_327_487}>
        <View style={styles.View_327_488}>
          <Text style={styles.Text_327_488}>Choose PDF File</Text>
        </View>
        <View style={styles.View_327_489}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f44b01af-153a-4ce6-b27a-2ad0bce1eeb7"
            }}
            style={styles.ImageBackground_327_490}
          />
          <View style={styles.View_327_491} />
        </View>
      </View>
      <View style={styles.View_327_492}>
        <View style={styles.View_327_493} />
        <View style={styles.View_327_494}>
          <View style={styles.View_327_495} />
          <View style={styles.View_327_496}>
            <Text style={styles.Text_327_496}>Choose PDF File</Text>
          </View>
          <View style={styles.View_327_497}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3168410-38f4-44de-93a0-9b5a6ca9ef3d"
              }}
              style={styles.ImageBackground_327_498}
            />
            <View style={styles.View_327_499} />
          </View>
        </View>
      </View>
      <View style={styles.View_327_500}>
        <Text style={styles.Text_327_500}>Light</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/929a2576-5142-4ce4-af1c-dec8ee167ec7"
        }}
        style={styles.ImageBackground_327_501}
      />
      <View style={styles.View_327_502}>
        <Text style={styles.Text_327_502}>Cipla Info</Text>
      </View>
      <View style={styles.View_327_503}>
        <View style={styles.View_327_504} />
        <View style={styles.View_327_505}>
          <Text style={styles.Text_327_505}>Select Design</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e43a1a0-308f-4521-9bcf-b53bfc8106ab"
          }}
          style={styles.ImageBackground_327_506}
        />
      </View>
      <View style={styles.View_327_507}>
        <View style={styles.View_327_508} />
        <View style={styles.View_327_509}>
          <Text style={styles.Text_327_509}>Save</Text>
        </View>
      </View>
      <View style={styles.View_327_510} />
      <View style={styles.View_327_511}>
        <Text style={styles.Text_327_511}>Merge &amp; Download</Text>
      </View>
      <View style={styles.View_327_512}>
        <View style={styles.View_327_513}>
          <Text style={styles.Text_327_513}>Select File Path:</Text>
        </View>
        <View style={styles.View_327_514} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f5268d5-4c2e-440f-9ed0-e0164ac787db"
          }}
          style={styles.ImageBackground_327_515}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9706bd64-1e0e-4007-89ea-784daaf7553d"
          }}
          style={styles.ImageBackground_327_516}
        />
      </View>
      <View style={styles.View_327_517}>
        <Text style={styles.Text_327_517}>Select “Artist Path” File:</Text>
      </View>
      <View style={styles.View_327_518}>
        <Text style={styles.Text_327_518}>Customize Input Table:</Text>
      </View>
      <View style={styles.View_327_519}>
        <Text style={styles.Text_327_519}>Select Shades</Text>
      </View>
      <View style={styles.View_327_520} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b48c9f3f-1057-4b02-b3c7-9f9c11d65068"
        }}
        style={styles.ImageBackground_327_521}
      />
      <View style={styles.View_327_522}>
        <Text style={styles.Text_327_522}>Settings</Text>
      </View>
      <View style={styles.View_327_523}>
        <View style={styles.View_327_524} />
        <View style={styles.View_327_525} />
        <View style={styles.View_327_526} />
        <View style={styles.View_327_527} />
        <View style={styles.View_327_528} />
        <View style={styles.View_327_529} />
        <View style={styles.View_327_530} />
        <View style={styles.View_327_531} />
        <View style={styles.View_327_532} />
        <View style={styles.View_327_533} />
        <View style={styles.View_327_534} />
        <View style={styles.View_327_535} />
        <View style={styles.View_327_536} />
        <View style={styles.View_327_537} />
        <View style={styles.View_327_538} />
        <View style={styles.View_327_539} />
        <View style={styles.View_327_540} />
        <View style={styles.View_327_541} />
        <View style={styles.View_327_542} />
        <View style={styles.View_327_543} />
        <View style={styles.View_327_544} />
        <View style={styles.View_327_545} />
        <View style={styles.View_327_546} />
        <View style={styles.View_327_547} />
        <View style={styles.View_327_548} />
        <View style={styles.View_327_549} />
        <View style={styles.View_327_550} />
        <View style={styles.View_327_551} />
        <View style={styles.View_327_552} />
        <View style={styles.View_327_553} />
        <View style={styles.View_327_554} />
        <View style={styles.View_327_555} />
        <View style={styles.View_327_556} />
        <View style={styles.View_327_557} />
        <View style={styles.View_327_558} />
        <View style={styles.View_327_559} />
        <View style={styles.View_327_560} />
        <View style={styles.View_327_561} />
        <View style={styles.View_327_562}>
          <Text style={styles.Text_327_562}>Lab Value - L</Text>
        </View>
        <View style={styles.View_327_563}>
          <Text style={styles.Text_327_563}>NA</Text>
        </View>
        <View style={styles.View_327_564}>
          <Text style={styles.Text_327_564}>NA</Text>
        </View>
        <View style={styles.View_327_565}>
          <Text style={styles.Text_327_565}>NA</Text>
        </View>
        <View style={styles.View_327_566}>
          <Text style={styles.Text_327_566}>NA</Text>
        </View>
        <View style={styles.View_327_567}>
          <Text style={styles.Text_327_567}>NA</Text>
        </View>
        <View style={styles.View_327_568}>
          <Text style={styles.Text_327_568}>NA</Text>
        </View>
        <View style={styles.View_327_569}>
          <Text style={styles.Text_327_569}>NA</Text>
        </View>
        <View style={styles.View_327_570}>
          <Text style={styles.Text_327_570}>NA</Text>
        </View>
        <View style={styles.View_327_571}>
          <Text style={styles.Text_327_571}>NA</Text>
        </View>
        <View style={styles.View_327_572}>
          <Text style={styles.Text_327_572}>NA</Text>
        </View>
        <View style={styles.View_327_573}>
          <Text style={styles.Text_327_573}>NA</Text>
        </View>
        <View style={styles.View_327_574}>
          <Text style={styles.Text_327_574}>NA</Text>
        </View>
        <View style={styles.View_327_575}>
          <Text style={styles.Text_327_575}>NA</Text>
        </View>
        <View style={styles.View_327_576}>
          <Text style={styles.Text_327_576}>NA</Text>
        </View>
        <View style={styles.View_327_577}>
          <Text style={styles.Text_327_577}>NA</Text>
        </View>
        <View style={styles.View_327_578}>
          <Text style={styles.Text_327_578}>NA</Text>
        </View>
        <View style={styles.View_327_579}>
          <Text style={styles.Text_327_579}>NA</Text>
        </View>
        <View style={styles.View_327_580}>
          <Text style={styles.Text_327_580}>NA</Text>
        </View>
        <View style={styles.View_327_581}>
          <Text style={styles.Text_327_581}>NA</Text>
        </View>
        <View style={styles.View_327_582}>
          <Text style={styles.Text_327_582}>NA</Text>
        </View>
        <View style={styles.View_327_583}>
          <Text style={styles.Text_327_583}>NA</Text>
        </View>
        <View style={styles.View_327_584}>
          <Text style={styles.Text_327_584}>NA</Text>
        </View>
        <View style={styles.View_327_585}>
          <Text style={styles.Text_327_585}>NA</Text>
        </View>
        <View style={styles.View_327_586}>
          <Text style={styles.Text_327_586}>NA</Text>
        </View>
        <View style={styles.View_327_587}>
          <Text style={styles.Text_327_587}>NA</Text>
        </View>
        <View style={styles.View_327_588}>
          <Text style={styles.Text_327_588}>NA</Text>
        </View>
        <View style={styles.View_327_589}>
          <Text style={styles.Text_327_589}>NA</Text>
        </View>
        <View style={styles.View_327_590}>
          <Text style={styles.Text_327_590}>NA</Text>
        </View>
        <View style={styles.View_327_591}>
          <Text style={styles.Text_327_591}>NA</Text>
        </View>
        <View style={styles.View_327_592} />
        <View style={styles.View_327_593} />
        <View style={styles.View_327_594} />
        <View style={styles.View_327_595} />
        <View style={styles.View_327_596} />
        <View style={styles.View_327_597} />
        <View style={styles.View_327_598} />
        <View style={styles.View_327_599} />
        <View style={styles.View_327_600} />
        <View style={styles.View_327_601}>
          <Text style={styles.Text_327_601}>Pantone No.</Text>
        </View>
        <View style={styles.View_327_602}>
          <Text style={styles.Text_327_602}>NA</Text>
        </View>
        <View style={styles.View_327_603}>
          <Text style={styles.Text_327_603}>NA</Text>
        </View>
        <View style={styles.View_327_604}>
          <Text style={styles.Text_327_604}>NA</Text>
        </View>
        <View style={styles.View_327_605}>
          <Text style={styles.Text_327_605}>NA</Text>
        </View>
        <View style={styles.View_327_606}>
          <Text style={styles.Text_327_606}>NA</Text>
        </View>
        <View style={styles.View_327_607}>
          <Text style={styles.Text_327_607}>NA</Text>
        </View>
        <View style={styles.View_327_608}>
          <Text style={styles.Text_327_608}>NA</Text>
        </View>
        <View style={styles.View_327_609}>
          <Text style={styles.Text_327_609}>NA</Text>
        </View>
        <View style={styles.View_327_610}>
          <Text style={styles.Text_327_610}>NA</Text>
        </View>
        <View style={styles.View_327_611}>
          <Text style={styles.Text_327_611}>NA</Text>
        </View>
        <View style={styles.View_327_612}>
          <Text style={styles.Text_327_612}>NA</Text>
        </View>
        <View style={styles.View_327_613}>
          <Text style={styles.Text_327_613}>Lab Value - a</Text>
        </View>
        <View style={styles.View_327_614}>
          <Text style={styles.Text_327_614}>Lab Value - b</Text>
        </View>
        <View style={styles.View_327_615}>
          <Text style={styles.Text_327_615}>Delta E Value (rEab)</Text>
        </View>
        <View style={styles.View_327_616}>
          <Text style={styles.Text_327_616}>
            Spectrophotometer Standard Setting
          </Text>
        </View>
      </View>
      <View style={styles.View_327_617}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec2fbda0-2854-4d0f-840e-25dd401f9163"
          }}
          style={styles.ImageBackground_327_618}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a265ab-7585-44fd-9afb-0d992e1136e5"
          }}
          style={styles.ImageBackground_327_619}
        />
      </View>
      <View style={styles.View_327_620}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fda7ed8-febe-4b1d-9f56-ca070d5a7db1"
          }}
          style={styles.ImageBackground_327_621}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/904ff983-b564-48cb-8d5d-b56ea56cb11e"
          }}
          style={styles.ImageBackground_327_622}
        />
      </View>
      <View style={styles.View_327_623}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e19c3d5-cd6a-4d0e-932a-642135287edf"
          }}
          style={styles.ImageBackground_327_624}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37f497e1-b5af-4be2-95ce-ba8a32edd8f4"
          }}
          style={styles.ImageBackground_327_625}
        />
      </View>
      <View style={styles.View_327_626}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f068ac6b-ef32-422b-8b37-25f69dfb2560"
          }}
          style={styles.ImageBackground_327_627}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f91b230d-9630-4d0f-9133-8c1264eb49c6"
          }}
          style={styles.ImageBackground_327_628}
        />
      </View>
      <View style={styles.View_327_629}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe06701c-b41f-4b4f-aa3b-f7369087f1eb"
          }}
          style={styles.ImageBackground_327_630}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f2dda27-88bd-401e-8254-f113400e6a25"
          }}
          style={styles.ImageBackground_327_631}
        />
      </View>
      <View style={styles.View_327_632}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d010b58-82ef-4c0c-9eb4-4529a4de64a6"
          }}
          style={styles.ImageBackground_327_633}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1506e3f-8bf4-49c6-9e52-84785c1e2b91"
          }}
          style={styles.ImageBackground_327_634}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7a63577-355b-46e0-8af0-c506ca197e81"
        }}
        style={styles.ImageBackground_327_635}
      />
      <View style={styles.View_327_636}>
        <View style={styles.View_327_637} />
        <TouchableOpacity
          style={styles.TouchableOpacity_327_638}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_61"))
          }
        >
          <Text style={styles.Text_327_638}>Artist Path</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bffb8d2-9ba0-4697-8ba8-353a8dd3447d"
          }}
          style={styles.ImageBackground_327_639}
        />
        <View style={styles.View_327_640}>
          <Text style={styles.Text_327_640}>Packaging Development</Text>
        </View>
      </View>
      <View style={styles.View_327_641} />
      <View style={styles.View_327_425}>
        <TouchableOpacity
          style={styles.TouchableOpacity_327_418}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_1124"))
          }
        />
        <View style={styles.View_327_419}>
          <Text style={styles.Text_327_419}>Your file is getting merged</Text>
        </View>
        <View style={styles.View_327_420} />
        <View style={styles.View_327_421} />
        <View style={styles.View_327_422} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0974421f-ad91-45c2-b5a9-6a382b7e78c7"
          }}
          style={styles.ImageBackground_327_423}
        />
        <View style={styles.View_327_424}>
          <Text style={styles.Text_327_424}>50%</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("118%") },
  View_327_427: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("26%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_428: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("-4%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_429: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("6%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_430: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("122%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_431: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_432: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("129%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_433: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("33%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_434: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("149%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_435: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("0%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_436: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("117%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_437: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("20%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_438: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("137%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_439: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("6%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_440: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_441: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("22%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_442: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("139%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_443: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("7%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_444: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("123%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_445: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("56%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_446: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("132%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_447: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("47%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_448: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("122%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_449: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_450: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("136%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_451: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("64%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_452: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("18%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_453: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("94%"),
    backgroundColor: "rgba(119, 179, 234, 1)",
    opacity: 0,
    borderColor: "rgba(24, 127, 201, 1)",
    borderWidth: 1
  },
  View_327_454: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_455: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("121%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_456: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("38%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_457: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("113%"),
    backgroundColor: "rgba(129, 185, 250, 1)",
    opacity: 0.15000000596046448
  },
  View_327_458: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("13%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_459: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("88%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_460: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("74%"),
    backgroundColor: "rgba(91, 166, 255, 1)",
    opacity: 0.14000000059604645
  },
  View_327_461: {
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
  Text_327_461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_462: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_327_462: {
    color: "rgba(136, 130, 132, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_463: {
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
  View_327_464: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_465: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("70%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_466: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  ImageBackground_327_467: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%")
  },
  View_327_468: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_468: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_469: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  ImageBackground_327_470: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  ImageBackground_327_471: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  ImageBackground_327_472: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("74%")
  },
  View_327_473: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_473: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_474: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  ImageBackground_327_475: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("74%")
  },
  View_327_476: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_477: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_478: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("74%")
  },
  ImageBackground_327_479: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("74%")
  },
  View_327_480: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_480: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_481: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_482: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_327_482: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_483: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("104%")
  },
  ImageBackground_327_484: {
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
  View_327_485: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_486: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("103%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_487: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("104%")
  },
  View_327_488: {
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
  Text_327_488: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_489: {
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
  ImageBackground_327_490: {
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
  View_327_491: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_492: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%")
  },
  View_327_493: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  View_327_494: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_327_495: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_496: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_496: {
    color: "rgba(233, 250, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_497: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_327_498: {
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
  View_327_499: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(233, 250, 255, 1)"
  },
  View_327_500: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_327_500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_501: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("29%")
  },
  View_327_502: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_327_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_503: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("110%")
  },
  View_327_504: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_505: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_327_505: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_506: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_327_507: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("55%")
  },
  View_327_508: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 0.5
  },
  View_327_509: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_327_509: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_510: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("110%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  View_327_511: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("110%"),
    justifyContent: "center"
  },
  Text_327_511: {
    color: "rgba(165, 165, 165, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_512: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%")
  },
  View_327_513: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_327_513: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_514: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(87, 139, 161, 1)",
    opacity: 0.14000000059604645
  },
  ImageBackground_327_515: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_327_516: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%")
  },
  View_327_517: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_517: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_518: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_327_518: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_519: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_327_519: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_520: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("13%"),
    backgroundColor: "rgba(29, 78, 137, 1)",
    opacity: 0.07999999821186066,
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 2
  },
  ImageBackground_327_521: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_327_522: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_327_522: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_523: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("28%")
  },
  View_327_524: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(29, 78, 137, 1)",
    borderWidth: 1
  },
  View_327_525: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_526: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_527: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_528: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_529: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_530: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_531: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_532: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_533: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_534: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_535: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_536: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_537: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_538: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_539: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_540: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_541: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_542: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_543: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_544: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_545: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_546: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_547: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_548: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_549: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_550: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_551: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_552: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_553: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_554: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_555: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_556: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_557: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_558: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_559: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_560: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_561: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_562: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_327_562: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_563: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_563: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_564: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_564: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_565: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_565: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_566: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_566: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_567: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_567: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_568: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_568: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_569: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_569: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_570: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_570: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_571: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_571: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_572: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_572: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_573: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_573: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_574: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_574: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_575: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_575: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_576: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_576: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_577: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_577: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_578: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_578: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_579: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_579: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_580: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_580: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_581: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_581: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_582: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_582: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_583: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_583: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_584: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_584: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_585: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_585: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_586: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_586: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_587: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_587: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_588: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_588: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_589: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_589: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_590: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_590: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_591: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_327_591: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_592: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_593: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_594: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_595: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_596: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_597: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_598: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_599: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_600: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(160, 195, 237, 1)",
    borderWidth: 0.30000001192092896
  },
  View_327_601: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_327_601: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_602: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_602: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_603: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_603: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_604: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_604: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_605: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_605: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_606: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_606: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_607: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_607: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_608: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_608: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_609: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_609: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_610: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_327_610: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_611: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_611: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_612: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_327_612: {
    color: "rgba(106, 141, 183, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_613: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_327_613: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_614: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_327_614: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_615: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_327_615: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_616: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_327_616: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_617: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("74%")
  },
  ImageBackground_327_618: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_619: {
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
  View_327_620: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("74%")
  },
  ImageBackground_327_621: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_622: {
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
  View_327_623: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("74%")
  },
  ImageBackground_327_624: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_625: {
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
  View_327_626: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("74%")
  },
  ImageBackground_327_627: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_628: {
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
  View_327_629: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%")
  },
  ImageBackground_327_630: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_631: {
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
  View_327_632: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("29%")
  },
  ImageBackground_327_633: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_327_634: {
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
  ImageBackground_327_635: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("58%")
  },
  View_327_636: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%")
  },
  View_327_637: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_327_638: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_327_638: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_327_639: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_327_640: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_327_640: {
    color: "rgba(29, 78, 137, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_641: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("116%"),
    minHeight: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(69, 69, 69, 1)",
    opacity: 0.4000000059604645
  },
  View_327_425: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("47%")
  },
  TouchableOpacity_327_418: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_327_419: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_327_419: {
    color: "rgba(2, 50, 108, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_327_420: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_327_421: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  View_327_422: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("18%"),
    backgroundColor: "rgba(29, 78, 137, 1)"
  },
  ImageBackground_327_423: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("17%")
  },
  View_327_424: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_327_424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
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
