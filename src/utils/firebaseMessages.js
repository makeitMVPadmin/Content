
import { db } from '../Firebase/FirebaseConfig';
import { collection, getDocs, doc, getDoc, setDoc, addDoc, deleteDoc, serverTimestamp, FieldValue } from 'firebase/firestore';

const MESSAGES_COLLECTION_NAME = 'Messages';

// Messages DB function Start
async function getMessages() {
    try {
      const messagesCollection = collection(db, MESSAGES_COLLECTION_NAME);
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesList = messagesSnapshot.docs.map(doc => doc.data());
      return messagesList;
    } catch (err) {
      throw new Error('Error getting messages: ' + err.message);
    }
  }
  

async function addMessage(message){
    try {
      // if (!message.fullName || !user.email) {
      //     throw new Error('User must have a name and an email address.');
      // }
      message.createdAt = serverTimestamp();
      const { id } = await addDoc(collection(db, MESSAGES_COLLECTION_NAME), message);
      return id;
    } catch (err) {
      throw new Error('Error adding message: ' + err.message);
    }
  }
// Messages DB function end

export { addMessage, getMessages };

