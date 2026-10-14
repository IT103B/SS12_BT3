function addSubscription() {
  console.log('Xu ly them thue bao');
}

function listSubscriptions() {
  console.log('Xu ly hien thi danh sach');
}

function updateSubscription() {
  console.log('Xu ly cap nhat thue bao');
}

function deleteSubscription() {
  console.log('Xu ly huy thue bao');
}

function showMonolithicExample() {
  const choice = '1';

  switch (choice) {
    case '1':
      // Toan bo logic them moi se nam truc tiep o day.
      console.log('Monolithic: nhap du lieu, kiem tra va them thue bao');
      break;
    case '2':
      console.log('Monolithic: tim va in toan bo danh sach');
      break;
    default:
      console.log('Lua chon khong hop le');
  }
}

function showModularExample(choice) {
  switch (choice) {
    case '1':
      addSubscription();
      break;
    case '2':
      listSubscriptions();
      break;
    case '3':
      updateSubscription();
      break;
    case '4':
      deleteSubscription();
      break;
    default:
      console.log('Lua chon khong hop le');
  }
}

console.log('=== Vi du monolithic ===');
showMonolithicExample();

console.log('\n=== Vi du modular ===');
showModularExample('1');
