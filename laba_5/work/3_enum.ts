enum Member {
    simple,
    standart,
    primary
}

const memberShip = Member.simple;
const memberShipRevers = Member[1]

console.log(memberShip);
console.log(memberShipRevers);

enum SocialMedia {
    Vk = 'Vk',
    Facbook = 'Facebook',
    Instogram = 'Insta'
}

console.log(SocialMedia.Facbook);