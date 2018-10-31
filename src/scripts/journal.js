API.getJournalEntries()
    .then((journalEntries) => {
        componentMakerObjectManager.componentMaker(journalEntries)
    })