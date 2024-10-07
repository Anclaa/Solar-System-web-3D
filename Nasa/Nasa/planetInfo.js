const planetData = {
    sun: {
        name: "Sun",
        details: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.",
        information: "1. At a temperature of about 5,500 degrees, the core can reach up to 15.5 million degrees. \n\n 2. The Sun, the closest star to the Earth \n\n 3. It takes one month to go around itself around itself \n\n 4. The Sun is composed mostly of hydrogen (about 75%) and helium (24%), with traces of other elements such as oxygen and carbon. \n\n 5. Our Sun is 4,500,000,000 years old.",
        gif: "https://usagif.com/wp-content/uploads/gifs/sun-40.gif"
    },
    mercury: {
        name: "Mercury",
        details: "Mercury is the closest planet to the Sun. It has a very thin atmosphere and extreme temperatures.",
        information: "1. Smallest planet: Mercury is the smallest planet in our solar system, with a diameter of about 4,880 kilometers (3,032 miles), making it just slightly larger than Earth's moon. \n\n 2. Closest planet to the Sun: Mercury orbits closest to the Sun, at an average distance of about 57.9 million kilometers (35.98 million miles). \n\n 3. Extreme temperatures: Despite being closest to the Sun, Mercury has extreme temperature variations. Daytime temperatures can reach up to 430°C (800°F), while nighttime temperatures can drop to -180°C (-290°F). \n\n 4. Fastest orbit: Mercury has the shortest orbit around the Sun, completing one full orbit in just 88 Earth days. This is why a year on Mercury is much shorter than on Earth. \n\n Mercury is heavily cratered, resembling our Moon, with large impact basins like the Caloris Basin, which is over 1,500 kilometers (930 miles) in diameter.",
        gif: "https://i.pinimg.com/originals/d7/aa/19/d7aa1904f0b961caef4e85eb0d38120b.gif"
    },
    venus: {
        name: "Venus",
        details: "Venus is the second planet from the Sun and has a thick atmosphere that traps heat, making it the hottest planet.",
        information: "1. Hottest planet: Despite being the second planet from the Sun, Venus is the hottest planet in the solar system, with surface temperatures reaching around 465°C (869°F), hotter than Mercury due to its thick atmosphere trapping heat. \n\n 2. Retrograde rotation: Venus rotates in the opposite direction to most planets in the solar system. This means the Sun rises in the west and sets in the east. A day on Venus (one rotation) is longer than its year (one orbit around the Sun). \n\n Thick atmosphere: Venus has a dense atmosphere composed mostly of carbon dioxide, with clouds of sulfuric acid, making it impossible for life as we know it and causing intense surface pressure, 92 times that of Earth. \n\n 4. Thick atmosphere: Venus has a dense atmosphere composed mostly of carbon dioxide, with clouds of sulfuric acid, making it impossible for life as we know it and causing intense surface pressure, 92 times that of Earth. \n\n Earth's twin: Venus is often called Earth’s sister planet because of their similar size and composition. However, their environments are drastically different, with Venus being incredibly inhospitable.",
        gif: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Venus_Rotation_Movie.gif/640px-Venus_Rotation_Movie.gif"
    },
    earth: {
        name: "Earth",
        details: "Earth is the third planet from the Sun and the only planet known to support life.",
        information: "1. Only planet with life: Earth is the only known planet in the universe that supports life, thanks to its perfect combination of atmosphere, water, and temperature. \n\n 2. 70% water: About 70% of Earth's surface is covered in water, mostly in the form of oceans. This abundance of water is crucial for sustaining life and maintaining Earth's climate. \n\n 3. Tectonic plates: Earth is the only planet known to have tectonic plates. These plates shift over time, causing earthquakes, forming mountains, and shaping continents. \n\n 4. Magnetic field: Earth's core generates a magnetic field that protects the planet from harmful solar radiation by deflecting charged particles from the Sun. \n\n 5. Atmosphere with oxygen: Earth's atmosphere is unique because it contains 21% oxygen, which is vital for most life forms. The rest of the atmosphere consists mostly of nitrogen (78%) and trace gases like carbon dioxide.",
        gif: "https://scitechdaily.com/images/DSCOVR-Far-Side-Moon-Crop.gif"
    },
    mars: {
        name: "Mars",
        details: "Mars is known as the Red Planet due to its reddish appearance. It is the fourth planet from the Sun.",
        information: "1. Red Planet: Mars is known as the Red Planet due to its reddish appearance, caused by iron oxide (rust) on its surface. \n\n 2. Largest volcano: Mars is home to Olympus Mons, the tallest volcano in the solar system, standing about 22 kilometers (13.6 miles) high, roughly three times the height of Mount Everest. \n\n 3. Thin atmosphere: Mars has a very thin atmosphere, composed mostly of carbon dioxide, which means it can't retain heat. This results in extreme temperature fluctuations, from about 20°C (68°F) during the day to -80°C (-112°F) at night. \n\n 4. Evidence of water: While liquid water doesn’t exist on the surface today, scientists have found evidence that Mars once had rivers, lakes, and perhaps oceans billions of years ago, and it still has ice caps at its poles. \n\n 5. Two moons: Mars has two small moons, Phobos and Deimos, which are thought to be captured asteroids from the nearby asteroid belt.",
        gif: "https://scitechdaily.com/images/Mars-Planet-Rotation.gif"
    },
    jupiter: {
        name: "Jupiter",
        details: "Jupiter is the largest planet in the Solar System and has a Great Red Spot, which is a giant storm.",
        information: "1. Largest planet: Jupiter is the largest planet in the solar system, with a diameter of about 142,984 kilometers (88,846 miles). You could fit 1,300 Earths inside it! \n\n 2. Great Red Spot: Jupiter's most famous feature is the Great Red Spot, a giant storm larger than Earth that has been raging for at least 400 years. \n\n 3. Many moons: Jupiter has at least 79 moons, with the four largest—Io, Europa, Ganymede, and Callisto—being known as the Galilean moons. Ganymede is the largest moon in the solar system. \n\n 4. Powerful magnetic field: Jupiter has the strongest magnetic field of any planet, which is about 20,000 times more powerful than Earth's, creating intense radiation belts around the planet. \n\n 5. Gas giant: Jupiter is composed mainly of hydrogen and helium, with no solid surface. Its immense pressure creates a liquid metallic hydrogen layer deep inside, contributing to its strong magnetic field.",
        gif: "https://i.pinimg.com/originals/b2/6c/8a/b26c8a86dceb0055a8719d9effed23bc.gif"
    },
    saturn: {
        name: "Saturn",
        details: "Saturn is famous for its prominent ring system. It is the sixth planet from the Sun.",
        information: "1. Iconic rings: Saturn is best known for its stunning and complex ring system, which is made of ice, rock, and dust. The rings are about 400,000 kilometers (240,000 miles) wide but only around 20 meters (66 feet) thick. \n\n 2. Gas giant: Like Jupiter, Saturn is a gas giant composed mostly of hydrogen and helium, and it has no solid surface. It is the second-largest planet in the solar system. \n\n 3. Low density: Saturn is the least dense planet in the solar system. In fact, its density is so low that if you could place it in a large enough body of water, it would float! \n\n 4. Many moons: Saturn has over 80 moons, with Titan being the largest. Titan is bigger than Mercury and has a thick atmosphere with lakes of liquid methane and ethane. \n\n 5. High-speed winds: Saturn experiences extremely fast winds, reaching up to 1,800 kilometers per hour (1,118 miles per hour) near the equator, creating massive storms in its atmosphere.",
        gif: "https://media.tenor.com/X41MtjA-OJUAAAAM/mercury-space.gif"
    },
    uranus: {
        name: "Uranus",
        details: "Uranus is known for its blue color and unusual axis of rotation. It is the seventh planet from the Sun.",
        information: "1. Uranus is unique because it rotates on its side with an axial tilt of 98 degrees. This means its poles experience extreme seasons, with one pole facing the Sun for 42 years at a time. \n\n 2. Uranus is classified as an ice giant due to its composition of water, ammonia, and methane ices, unlike Jupiter and Saturn, which are gas giants made mostly of hydrogen and helium. \n\n 3. The pale blue color of Uranus is due to the methane in its atmosphere, which absorbs red light and reflects blue-green light. \n\n 4. Uranus has a system of faint rings, which are less visible than Saturn’s but still present. These rings are composed mostly of dark, dust-sized particles. \n\n 5. Uranus is the coldest planet in the solar system, with temperatures dropping as low as -224°C (-371°F), even colder than Neptune, despite being farther from the Sun.",
        gif: "https://i.gifer.com/PAx.gif"
    },
    neptune: {
        name: "Neptune",
        details: "Neptune is the eighth planet from the Sun and is known for its deep blue color and strong winds.",
        information: "1. Fastest Winds in the Solar System: Neptune experiences the most extreme atmospheric winds, with speeds reaching up to 2,100 km/h (1,300 mph). These winds are significantly faster than those observed on any other planet in the solar system. \n\n 2. Great Dark Spot: Neptune is home to a massive storm system known as the Great Dark Spot, analogous to Jupiter's Great Red Spot. Discovered by the Voyager 2 spacecraft in 1989, this storm mysteriously disappeared and was later replaced by a similar atmospheric disturbance. \n\n 3. Faint and Dark Rings: Unlike Saturn’s bright rings, Neptune has several faint, dusty rings composed primarily of small dust particles. These rings are believed to be relatively young and may have formed due to collisions between small moons or other debris. \n\n 4. Unexpected Internal Heat Source: Neptune radiates more than twice the energy it receives from the Sun, suggesting the presence of an unknown internal heat source. The mechanisms driving this excess heat emission remain a subject of scientific investigation. \n\n 5. Triton’s Retrograde Orbit and Geological Activity: Neptune’s largest moon, Triton, is unique due to its retrograde orbit, meaning it revolves around Neptune in the opposite direction of the planet's rotation. This characteristic indicates that Triton may be a captured Kuiper Belt object. Additionally, Triton exhibits cryovolcanism, with geysers ejecting nitrogen gas, making it one of the few geologically active bodies in the solar system.",
        gif: "https://i.pinimg.com/originals/d1/9f/e4/d19fe4b78222cdba460698891a1e4f0f.gif"
    }
};

function showPlanetInfo(planet) {
    const info = planetData[planet];
    document.getElementById('planet-name').innerText = info.name;
    document.getElementById('planet-details').innerText = info.details;
    document.getElementById('openModal').style.display = 'block';
}

function showInfo() {
    const planet = document.getElementById('planet-name').innerText.toLowerCase();
    const info = planetData[planet];
    document.getElementById('planet3D').style.backgroundImage = `url(${info.gif})`;
    document.getElementById('namePlanet').innerText = info.name;
    document.getElementById('infoPlanet').innerText = info.information;
}

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});