
const loveText = document.getElementById("loveText");
const nextBtn = document.getElementById("nextBtn");

const text = ` 
كل سنه وانتي طيبه يا احلي جوجا في الدنيا ويارب تحققي كل الي نفسك فيه وديما احسن من اي حد🥰🌍
عارف انك زعلانه مني اوي بس حقك بصراحه بس ع العموم انا اسف علي كل دقيقه زعلتك فيها اسف علي كل دقيقه قولت فيها حاجه ضيقتك انتي متعرفيش غلاوتك عندي عامله ازاي وربنا يخليكي ليا ولي اهلك ويارب السنه الجديده دي تكون كلها ايام حلوه وتتبسطي فيها والعمر كلو ليكي يا نور عيني🥰🥰
بحبك يا احلي حاجه في حياتي 🥺🥺🌍
`;

const words = text.trim().split(/\s+/);

let index = 0;

function typeWord() {

    if (index < words.length) {

        loveText.textContent += words[index] + " ";

        index++;

        setTimeout(typeWord, 250);

    } else {

        nextBtn.style.display = "block";

    }
}

typeWord();


nextBtn.addEventListener("click", function () {

    window.location.href = "Photo.html";

});