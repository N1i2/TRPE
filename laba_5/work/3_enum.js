var Member;
(function (Member) {
    Member[Member["simple"] = 0] = "simple";
    Member[Member["standart"] = 1] = "standart";
    Member[Member["primary"] = 2] = "primary";
})(Member || (Member = {}));
var memberShip = Member.simple;
var memberShipRevers = Member[1];
console.log(memberShip);
console.log(memberShipRevers);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Vk"] = "Vk";
    SocialMedia["Facbook"] = "Facebook";
    SocialMedia["Instogram"] = "Insta";
})(SocialMedia || (SocialMedia = {}));
console.log(SocialMedia.Facbook);
