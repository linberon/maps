let markers = [
	{
		name: "Andean Bear",
		lat: -18.67,
		lng: -66.54,
		status: "Vulnerable",
		description: "The Andean bear is the only South American bear species. The other common name is Spectacled bear, thanks to their distinctive markings on the face, neck and chest. Each individual has a unique pattern, which makes them easily identifiable. <br><br>These elusive bears are native to the Andes mountain region, living in a wide variety of habitats, ranging from cloud forests to shrublands. They are omnivorous, although they mainly feed on fruits and different plants. Andean bears are known as the best climbers of all the bear species, they spend a significant amount of time in trees searching for food, and they even sleep there.<br><br>",
		threats: "Habitat loss, illegal killing, and climate change. Bear parts are sold to be used in traditional oriental medicine.",
		image: "imgs/Andean_bear_sm.jpg"
	},
	{
		name: "Hawaiian Crow",
		lat: 19.57,
		lng: -155.61,
		status: "Extinct in the Wild",
		description: "The Hawaiian Crow is the most endangered corvid species in the world. The last two known wild individuals disappeared in 2002. Once one of the largest native bird populations in Hawaii, their role in the ecosystem is exceptional. Many native plants rely on them for seed dispersal and germination. Without their main seed disperser, these plants could become a rarity in Hawaii's ecosystems. Hawaiian Crows are known for resourcefulness, they have been observed using twigs as tools to access food. <br><br>In attempt to save the species, captive breeding and reintroduction efforts have been made. Many of these efforts have proved to be unsuccessful.",
		threats: "Extensive habitat alteration, persecution by farmers, predation by introduced species, diseases carried by introduced species, inbreeding.",
		image: "imgs/Hawaiian_crow_sm.jpg"
	},
	{
		name: "Blue Poison Dart Frog",
		lat: 3.30,
		lng: -56.96,
		status: "Least Concern",
		description: "Also known as Dyeing Poison Frog, this brilliantly coloured amphibian makes a popular exotic pet, and is found in zoos all over the world. They are easily kept and bred in captivity, however wild populations are extremely vulnerable, as they are exposed to illegal collection and environmental factors. The frog's bright colour is a warning to predators. Their skin secretes a very potent toxin, that comes from the insects they eat. In captivity their diet don't contain the same compounds, therefore they cannot produce poison.</br></br> Only captive-bred frogs should be kept as pets, to protect wild populations.",
		threats: "Illegal pet trade, habitat loss.",
		image: "imgs/Blue_poison_frog_sm.jpg"
	},
	{
		name: "Alagoas Curassow",
		lat: -9.68,
		lng: -36.26,
		status: "Extinct in the Wild",
		description: "The Alagoas Curassow (Mitu mitu) is a glossy-black, pheasant-like bird. It was formerly found in forests in Northeastern Brazil.</br></br> The extinction of this species had been forecast since its discovery. Ceaseless clearance of its lowland forest habitat, chiefly for sugarcane, and poaching had soon brought it to the verge of extinction. It is now extinct in the wild; there are about 130 individuals in captivity, many of them are hybrids with Razor-billed Curassows.</br></br> A reintroduction plan is being organized, a suitable forest remnant has been identified for future reintroduction efforts.",
		threats: "Loss of habitat, poaching, hybridization with Amazonian Razor-billed Curassow.",
		image: "imgs/Alagoas_curassow_sm.jpg"
	},
	{
		name: "Red Wolf",
		lat: 35.67,
		lng: -76.48,
		status: "Critically Endangered",
		description: "The wild population of Red Wolf is a result of reintroduction projects. The species were extinct in the wild in 1980, and were reintroduced years later in North Carolina. The area was selected because of the absence of Coyotes, as Red Wolf x Coyote hybridization is one of the main issues that led this species to demise. Scientific research started only when numbers were already low, so it is only assumed that their favoured natural habitat types were wetlands and swamps, remote from human activity, although they can thrive in a variety of settings. Captive breeding and reintroduction programmes are still ongoing. Currently there are more wolves known to be living in captivity than in the wild.",
		threats: "Hybridization with coyotes, human induced deaths. Hybrids are sterilized to protect genetic integrity of the species.",
		image: "imgs/Red_wolf_sm.jpg"
	},
	{
		name: "Guam Rail",
		lat: 13.40,
		lng: 144.75,
		status: "Extinct in the Wild",
		description: "This flightless bird was widely distributed in most habitats on Guam. It forages along field edges and roadsides for snails, slugs, insects, geckos, vegetable matter, seeds and flowers. It is a year-round ground nester making it highly susceptible to predators, such as monitor lizards and rats. </br></br>The last individual in the wild died in 1987 following catastrophic declines owing to predation by the introduced Brown Tree Snake. The Guam rail had no experience with such a predator and lacked protective behaviours against the snake. Conservation efforts have been under way to establish a wild breeding colony on the nearby snake-free island of Rota.",
		threats: "Habitat destruction, predation by the introduced Brown Tree Snake, rats, feral cats, pigs and monitor lizards.",
		image: "imgs/Guam_rail_sm.jpg"
	},
	{
		name: "Polynesian Tree Snail",
		lat: -17.59,
		lng: -149.48,
		status: "Extinct in the Wild",
		description: "Many species of Partula are known under the name \"Polynesian tree snail\" (pictured: Partula rosea), endemic to Tahiti and the nearby islands. Their disappearance began with the introduction of giant African land snails. Soon the African snails have become pests, and a predator snail species was introduced to control them. Sadly, the carnivorous snail chose instead to hunt and eat the smaller, and slower native Partula species.</br></br> It is assumed that more than a hundred species of Partula once existed, now an estimated 70 percent of them are extinct in the wild, or have been lost. Today almost all the survivors live only in zoos.",
		threats: "Predation by the introduced carnivorous Florida Rosy Wolfsnail.",
		image: "imgs/Tree_snail_sm.jpg"
	},
	{
		name: "Pink Pigeon",
		lat: -20.40,
		lng: 57.44,
		status: "Vulnerable",
		description: "The Pink Pigeon is endemic to the Mascarene island of Mauritius, and is the only Mascarene pigeon that has not gone extinct. It was on the brink of extinction in 1991 when only 10 individuals remained, but its numbers have increased due to the efforts of the Durrell Wildlife Conservation Trust since 1977. While the population remains low, the IUCN downlisted the species from Critically endangered to Endangered in 2000, and then to Vulnerable in 2018. The book Golden Bats and Pink Pigeons by Gerald Durrell describes the conservation efforts.",
		threats: "Destruction of its native forest habitat, extreme weather, introduced predators and wildlife diseases, inbreeding. ",
		image: "imgs/Pink_pigeon_sm.jpg"
	},
	{
		name: "Black Rhinoceros",
		lat: -18.88,
		lng: 16.27,
		status: "Critically Endangered",
		description: "The Black Rhinoceros is native to eastern and southern Africa. Although it's referred to as black, its colors vary from brown to grey. The Black Rhino is smaller than the White Rhino, it has a pointed upper lip, which it uses to grasp leaves and twigs when feeding. The White Rhinoceros has square lips used for eating grass. Black Rhinos are generally solitary, with the only strong bond between a mother and her calf. The species overall is classified as critically endangered, three subspecies have been declared extinct, and one is on the brink of extinction. Parks and reserves have been made for protecting the rhinos with armed guards keeping watch, but even still many poachers get through and harm the rhinos for their horns.",
		threats: "Habitat changes, illegal poaching for the international rhino horn trade, and competing species. The horn is used in oriental medicine, and for ornamental purposes. Rhino horn is composed of keratine, and doesn't have any medicinal value.",
		image: "imgs/Black_rhino_sm.jpg"
	},
	{
		name: "Iberian Lynx",
		lat: 38.37,
		lng: -3.82,
		//status: "",
		description: "Be patient, I'm still working on it!",
		//threats: "",
		image: "imgs/no_img.jpg"
	},
	{
		name: "La Palma Pupfish",
		lat: 24.07,
		lng: -100.08,
		//status: "Extinct in the Wild",
		description: "Be patient, I'm still working on it!",
		//threats: "",
		image: "imgs/no_img.jpg"
	},
];
