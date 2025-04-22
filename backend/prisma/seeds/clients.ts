import { PrismaClient } from '../generated/client';
const prisma = new PrismaClient()

async function main() {
    const clients = [
        {
            firstName: "Guy",
            lastName: "Jirieck",
            email: "gjirieck0@over-blog.com",
            gender: "Male",
            image: "https://robohash.org/enimautculpa.png?size=50x50&set=set1"
        },
        {
            firstName: "Michel",
            lastName: "Yakubov",
            email: "myakubov1@facebook.com",
            gender: "Male",
            image: "https://robohash.org/similiqueipsameaque.png?size=50x50&set=set1"
        },
        {
            firstName: "Rafaelia",
            lastName: "Limpkin",
            email: "rlimpkin2@elpais.com",
            gender: "Female",
            image: "https://robohash.org/aliquidquasiassumenda.png?size=50x50&set=set1"
        },
        {
            firstName: "Krishnah",
            lastName: "Lannin",
            email: "klannin3@cbsnews.com",
            gender: "Male",
            image: "https://robohash.org/placeatdebitissuscipit.png?size=50x50&set=set1"
        },
        {
            firstName: "Maurise",
            lastName: "Logg",
            email: "mlogg4@ft.com",
            gender: "Male",
            image: "https://robohash.org/voluptatesetest.png?size=50x50&set=set1"
        },
        {
            firstName: "Bobbee",
            lastName: "Jereatt",
            email: "bjereatt5@nsw.gov.au",
            gender: "Female",
            image: "https://robohash.org/autvoluptatemfugit.png?size=50x50&set=set1"
        },
        {
            firstName: "Rossy",
            lastName: "Dicky",
            email: "rdicky6@blogs.com",
            gender: "Male",
            image: "https://robohash.org/erroromnisplaceat.png?size=50x50&set=set1"
        },
        {
            firstName: "Adrian",
            lastName: "Birds",
            email: "abirds7@sakura.ne.jp",
            gender: "Male",
            image: "https://robohash.org/corporistotamest.png?size=50x50&set=set1"
        },
        {
            firstName: "Phillip",
            lastName: "Stovine",
            email: "pstovine8@amazonaws.com",
            gender: "Male",
            image: "https://robohash.org/laborenihilaut.png?size=50x50&set=set1"
        },
        {
            firstName: "Dynah",
            lastName: "Fitzackerley",
            email: "dfitzackerley9@seesaa.net",
            gender: "Female",
            image: "https://robohash.org/temporibusvoluptasmagni.png?size=50x50&set=set1"
        }
    ];

    await prisma.client.createMany({ data: clients });
}

main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async (e) => { console.error(e) })
    .finally(async () => { await prisma.$disconnect() });
