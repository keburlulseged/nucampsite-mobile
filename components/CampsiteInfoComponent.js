import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import React from "react";

function RenderCampsite({ campsite }) {
  if (campsite) {
    return (
      <Card
        featuredTitle={campsite.name}
        image={require("../shared/images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />;
}

function CampsiteInfoComponent(props) {
  return <RenderCampsite campsite={props.campsite} />;
}

export default CampsiteInfoComponent;
