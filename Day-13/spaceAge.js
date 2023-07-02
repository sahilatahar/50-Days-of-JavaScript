const spaceAge = (seconds) => {
    const yearsInAllPlanets = {
        Mercury: 0,
        Venus: 0,
        Earth: 0,
        Mars: 0,
        Jupiter: 0,
        Saturn: 0,
        Uranus: 0,
        Neptune: 0,
    }

    yearsInAllPlanets.Mercury = Number((seconds / (.2408467 * 31557600)).toFixed(2));
    yearsInAllPlanets.Venus = Number((seconds / (.61519726 * 31557600)).toFixed(2));
    yearsInAllPlanets.Earth = Number((seconds / (1 * 31557600)).toFixed(2));
    yearsInAllPlanets.Mars = Number((seconds / (1.8808158 * 31557600)).toFixed(2));
    yearsInAllPlanets.Jupiter = Number((seconds / (11.862615 * 31557600)).toFixed(2));
    yearsInAllPlanets.Saturn = Number((seconds / (29.447498 * 31557600)).toFixed(2));
    yearsInAllPlanets.Uranus = Number((seconds / (84.016846 * 31557600)).toFixed(2));
    yearsInAllPlanets.Neptune = Number((seconds / (164.79132 * 31557600)).toFixed(2));

    return yearsInAllPlanets;
}

console.log(spaceAge(Math.round(65965561)))


