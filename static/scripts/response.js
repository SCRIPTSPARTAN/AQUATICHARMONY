function getBotResponse(input) {
  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  }

  // Sustainable Development Goals (SDG) responses
  if (input == "what is sdg 14") {
    return "SDG 14 is about conserving and sustainably using the oceans, seas, and marine resources.";
  } else if (input == "importance of life below water") {
    return "Life below water is crucial as oceans produce half of the oxygen we breathe and regulate the climate.";
  } else if (input == "how to protect marine life") {
    return "You can protect marine life by reducing plastic use, supporting sustainable seafood, and participating in beach clean-ups.";
  } else if (input == "threats to marine life") {
    return "Major threats include pollution, overfishing, and climate change.";
  } else if (input == "ocean acidification") {
    return "Ocean acidification is caused by increased CO2 absorption, which harms marine organisms like corals and shellfish.";
  } else if (input == "plastic pollution") {
    return "Plastic pollution is a significant threat to marine life, causing injury and death to many species.";
  } else if (input == "sustainable fishing") {
    return "Sustainable fishing practices help maintain fish populations and marine ecosystem health.";
  } else if (input == "marine protected areas") {
    return "Marine Protected Areas (MPAs) are regions where human activity is restricted to conserve the marine environment.";
  } else if (input == "coral reefs") {
    return "Coral reefs are vital ecosystems that support a diverse range of marine life.";
  } else if (input == "why are coral reefs important") {
    return "Coral reefs provide habitat, food, and protection for numerous marine species.";
  } else if (input == "how to reduce plastic waste") {
    return "You can reduce plastic waste by using reusable bags, bottles, and avoiding single-use plastics.";
  } else if (input == "effects of overfishing") {
    return "Overfishing depletes fish populations, disrupts ecosystems, and affects food security.";
  } else if (input == "ocean conservation organizations") {
    return "Organizations like Oceana, Marine Conservation Institute, and WWF work to protect marine environments.";
  } else if (input == "marine biodiversity") {
    return "Marine biodiversity is essential for ecosystem stability and resilience.";
  } else if (input == "what are microplastics") {
    return "Microplastics are tiny plastic particles that pollute the oceans and can harm marine life.";
  } else if (input == "how to support ocean conservation") {
    return "You can support ocean conservation by donating to organizations, reducing plastic use, and spreading awareness.";
  } else if (input == "climate change and oceans") {
    return "Climate change affects oceans by causing warming, acidification, and sea level rise.";
  } else if (input == "role of mangroves") {
    return "Mangroves protect coastlines, support marine life, and store carbon.";
  } else if (input == "seagrass meadows") {
    return "Seagrass meadows are important habitats that provide food and shelter for marine species.";
  } else if (input == "importance of sustainable seafood") {
    return "Choosing sustainable seafood helps ensure fish populations remain healthy and ecosystems stay balanced.";
  } else if (input == "how to participate in beach cleanups") {
    return "Look for local beach cleanup events or organize your own to help reduce marine debris.";
  } else if (input == "why are whales important") {
    return "Whales play a crucial role in marine ecosystems by maintaining food chains and nutrient cycles.";
  } else if (input == "ocean pollution") {
    return "Ocean pollution includes plastics, chemicals, and other waste that harm marine life.";
  } else if (input == "effects of oil spills") {
    return "Oil spills can devastate marine life by contaminating water and habitats.";
  } else if (input == "how to reduce carbon footprint") {
    return "Reducing your carbon footprint helps mitigate climate change impacts on oceans.";
  } else if (input == "marine habitat destruction") {
    return "Habitat destruction from coastal development and pollution threatens marine biodiversity.";
  } else if (input == "how to educate others about ocean conservation") {
    return "Share information, support policies, and participate in community efforts to spread awareness.";
  } else if (input == "importance of clean beaches") {
    return "Clean beaches prevent pollution from entering the ocean and protect marine life.";
  } else if (input == "how to help endangered marine species") {
    return "Support conservation efforts, avoid buying products from endangered species, and reduce plastic use.";
  } else if (input == "marine debris") {
    return "Marine debris includes any man-made waste that ends up in the ocean, posing risks to wildlife.";
  } else if (input == "how to reduce water pollution") {
    return "Reduce water pollution by minimizing chemical use, properly disposing of waste, and supporting clean water initiatives.";
  } else if (input == "benefits of protecting marine life") {
    return "Protecting marine life ensures biodiversity, supports fisheries, and maintains healthy ecosystems.";
  } else if (input == "ocean ecosystems") {
    return "Ocean ecosystems are diverse habitats that support marine life and provide resources for humans.";
  } else if (input == "how to volunteer for marine conservation") {
    return "Volunteer with organizations, participate in cleanups, and engage in citizen science projects.";
  } else if (input == "impact of climate change on coral reefs") {
    return "Climate change causes coral bleaching and ocean acidification, threatening reef ecosystems.";
  } else if (input == "how to prevent overfishing") {
    return "Support sustainable seafood, follow fishing regulations, and promote marine conservation policies.";
  } else if (input == "importance of marine education") {
    return "Marine education raises awareness and encourages actions to protect ocean health.";
  } else if (input == "how to promote sustainable tourism") {
    return "Promote sustainable tourism by choosing eco-friendly options and respecting marine environments.";
  } else if (input == "impact of marine litter") {
    return "Marine litter harms marine life, damages habitats, and poses health risks to humans.";
  } else if (input == "how to support marine research") {
    return "Support marine research by donating, participating in studies, and advocating for science-based policies.";
  } else if (input == "importance of ocean health") {
    return "Healthy oceans are vital for food, climate regulation, and biodiversity.";
  } else if (input == "how to reduce single-use plastics") {
    return "Reduce single-use plastics by opting for reusable alternatives and avoiding plastic packaging.";
  } else if (input == "role of international agreements") {
    return "International agreements like the Paris Agreement and UN conventions help protect marine environments.";
  } else if (input == "how to reduce chemical pollution") {
    return "Reduce chemical pollution by using eco-friendly products and properly disposing of hazardous waste.";
  } else if (input == "importance of marine protected areas") {
    return "Marine protected areas conserve biodiversity, support fisheries, and enhance ecosystem resilience.";
  } else if (input == "how to protect endangered species") {
    return "Protect endangered species by supporting conservation laws, reducing pollution, and avoiding harmful activities.";
  } else if (input == "benefits of marine biodiversity") {
    return "Marine biodiversity provides ecosystem services, supports fisheries, and contributes to human well-being.";
  } else if (input == "how to participate in citizen science") {
    return "Participate in citizen science by collecting data, reporting observations, and joining research projects.";
  } else if (input == "impact of ocean warming") {
    return "Ocean warming affects marine life, alters ecosystems, and exacerbates climate change impacts.";
  } else if (input == "how to advocate for ocean policies") {
    return "Advocate for ocean policies by contacting representatives, supporting legislation, and raising public awareness.";
  } else if (input == "importance of clean water") {
    return "Clean water is essential for marine life, human health, and ecosystem balance.";
  } else {
    return "Try asking something else!";
  }
}
