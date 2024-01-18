import axios from 'axios';
export default function useGuestbook() {

    // TODO: fetch notes


    // add note
    async function addNote(note, author) {

        try {
            const response = await axios.post('/api/dynamo/addNote',
                { note: note, author: author })

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    }

    return { addNote };
}
