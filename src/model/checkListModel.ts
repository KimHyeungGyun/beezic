/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

interface Params{
  callback: (checkItems: []) => void;
}

const getCheckListDoc = async (callback: Params): void => {
  const checkListDoc = await firestore()
    .collection('user-check-list')
    .doc('AZP6tBePcPVj49OKJuIK')
    .get()
    .then((item) => item.data())
    .catch(console.error);

  callback(checkListDoc.userDescription);
};

const setCheckListDoc = (checkItems: Array<Record<string, unknown>>): void => {
  firestore()
    .collection('user-check-list')
    .doc('AZP6tBePcPVj49OKJuIK')
    .update({ userDescription: checkItems })
    .catch(console.error);
};

export { setCheckListDoc, getCheckListDoc };