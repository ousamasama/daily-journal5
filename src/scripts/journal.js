
let url = "http://localhost:3000/journalEntries"

API.getJournalEntries().then((journalEntries) => {
    componentMakerObjectManager.componentMaker(journalEntries)
    document.querySelector("#journalEntrySave").addEventListener("click", event => {
        const dateInput = document.querySelector("#journalDate").value
        const conceptInput = document.querySelector("#conceptsCovered").value
        const entryInput = document.querySelector("#journalEntry").value
        const moodInput = document.querySelector("#moodForTheDay").value

        const savedEntry = {
            date: dateInput,
            concept: conceptInput,
            entry: entryInput,
            mood: moodInput
        }

        let fetchData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedEntry)
        }

        fetch(url, fetchData).then(() => {
            window.location.reload()
        })

        .catch((error) =>{
            console.log(error)
        })
    })
})