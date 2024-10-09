import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedaffirmationGallery from "@/components/GuidedaffirmationGallery";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your belief with affirmation
          </Text>
          <View>
            {
              AFFIRMATION_GALLERY.map((g)=>(
                <GuidedaffirmationGallery key={g.title} title={g.title} previews={g.data}/>
              ))
            }
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmation;
