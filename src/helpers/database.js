export function pushRef(ref, data) {
  firebase.database().ref(ref).push(data)
}

export function updateRef(
  ref,
  data,
  key = firebase.database().ref(ref).push().key
) {
  firebase.database().ref(ref+'/'+key).update(data)
}

export function setRef(
  ref,
  data,
  key = firebase.database().ref(ref).push().key
) {
  firebase.database().ref(ref+'/'+key).set(data)
}

export function deleteRef(ref, key) {
  setRef(ref, null, key)
}

export function onRef(ref, list) {
  firebase.database().ref(ref)
  .on('value', snapshot => {
    const items = snapshot.val()
    list.length = 0
    for(const key in items) {
      let item = items[key]
      item.key = key
      list.push(item)
    }
  })
}

export function onceRef(ref, list) {
  firebase.database().ref(ref)
  .once('value')
  .then(snapshot => {
    const items = snapshot.val()
    list.length = 0
    for(const key in items) {
      let item = items[key]
      item.key = key
      list.push(item)
    }
  })
}

export function offRef(ref) {
  firebase.database().ref(ref).off()
}
