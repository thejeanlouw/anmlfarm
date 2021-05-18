import firebase, {auth, firestore} from './firebase.utils'


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = async () => (await auth.signInWithPopup(provider));
export const signInWithEmailAndPassword = async ({email, password}) =>{
    return (await auth.signInWithEmailAndPassword(email, password))};
export const signOut = () => auth.signOut();

export const createUserWithEmailAndPassword = async (email, password) =>{
    return (await auth.createUserWithEmailAndPassword(email, password))};

export const updateFirebaseUserField = async (userAuth, fieldKey, fieldValue) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`anmlfarm-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(snapShot.exists){
        try {
            await userRef.update({
                [fieldKey]: fieldValue
            });
            return true;
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
            return false;
        }
    }
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`anmlfarm-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {photoURL, uid, emailVerified, email, displayName} = userAuth;
        try {
            await userRef.set({
                photoURL,
                uid,
                emailVerified,
                email,
                displayName,
                createdAt: new Date(),
                hasDoneOnboarding: false,
                hasDoneProfile: false,
                hasDoneTerms: false,
                ...additionalData
            });
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
        }
    }

    return userRef;

}