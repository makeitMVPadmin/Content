import { db } from '../Firebase/FirebaseConfig';
import { collection, getDocs, doc, getDoc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

const USERS_COLLECTION_NAME = 'Users';
const MESSAGES_COLLECTION_NAME = 'Messages';


// User DB functions start
async function userExists(id) {
  const userRef = doc(db, USERS_COLLECTION_NAME, id);
  const userSnapshot = await getDoc(userRef);
  return userSnapshot.exists(); // returns true or false
}

async function getUsers() {
  try {
    const usersCollection = collection(db, USERS_COLLECTION_NAME);
    const usersSnapshot = await getDocs(usersCollection);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
  } catch (err) {
    throw new Error('Error getting users: ' + err.message);
  }
}

async function getUserById(id) {
  try {
    const exists = await userExists(id)
    if (!exists) {
      throw new Error(`User with ID ${id} does not exist`)
    }
    const userRef = doc(db, USERS_COLLECTION_NAME, id);
    const { data } = await getDoc(userRef);
    return data;
  } catch (err) {
    throw new Error('Error getting user by ID: ' + err.message);
  }
}

async function addUser(user) {
  try {
    if (!user.fullName || !user.email) {
        throw new Error('User must have a name and an email address.');
    }
    const { id } = await addDoc(collection(db, USERS_COLLECTION_NAME), user);
    return id;
  } catch (err) {
    throw new Error('Error adding user: ' + err.message);
  }
}

// The shouldMerge parameter is optional and defaults to false.
// If set to true, the user object will be merged with the existing document and will not overwrite any existing fields.
// If set to false, the user object will overwrite the existing document.
async function updateUser(id, user, shouldMerge = false) {
  const userRef = doc(db, USERS_COLLECTION_NAME, id);
  try {
    const exists = await userExists(id)
    if (!exists) {
      throw new Error(`User with ID ${id} does not exist`)
    }
    await setDoc(userRef, user, { merge: shouldMerge });
  } catch (err) {
    throw new Error('Error updating user: ' + err.message);
  }
}

async function deleteUser(id) {
  try {
    const userRef = doc(db, USERS_COLLECTION_NAME, id);
    const exists = await userExists(id)
    if (!exists) {
      throw new Error(`User with ID ${id} does not exist`)
    }
    await deleteDoc(userRef);
  } catch (err) {
    throw new Error('Error deleting user: ' + err.message);
  }
}
// User DB functions end


export { getUsers, getUserById, addUser, updateUser, deleteUser };
