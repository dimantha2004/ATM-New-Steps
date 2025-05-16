interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  [key: string]: {
    [key: string]: any;
  };
}

export const translations: Translations = {
  en: {
    header: {
      title: 'BOC BOC BOC',
      darkMode: 'Switch to dark mode',
      lightMode: 'Switch to light mode'
    },
    footer: {
      copyright: 'All rights reserved',
      disclaimer: 'Bank of ceylon'
    },
    guide: {
      title: 'How to Use a BOC ATM',
      subtitle: 'Follow these simple steps:',
      voiceNarration: {
        start: 'Start Narration',
        stop: 'Stop Narration'
      },
      navigation: {
        previous: 'Previous',
        next: 'Next',
        stepOf: 'Step {current} of {total}'
      }
    },
    steps: [
      {
        title: 'Insert ATM Card',
        description: 'Insert your BOC bank card into the card slot with the chip facing up and toward the machine.'
      },
      {
        title: 'Select Language',
        description: 'Choose your preferred language from the options displayed on the screen.'
      },
      {
        title: 'Enter PIN',
        description: 'Enter your 4-digit Personal Identification Number (PIN) using the keypad. Make sure to cover the keypad while entering your PIN for security.'
      },
      {
        title: 'Select Transaction Type',
        description: 'Choose the type of transaction you wish to perform (Withdraw Cash, Balance Inquiry, Mini Statement, Fund Transfer, etc.).'
      },
      {
        title: 'Enter Amount',
        description: 'If withdrawing cash, enter the amount you wish to withdraw using the keypad or select from the quick cash options.'
      },
      {
        title: 'Collect Cash',
        description: 'Once approved, collect your cash from the dispenser slot. Be sure to count your money before leaving.'
      },
      {
        title: 'Take Card and Receipt',
        description: 'Collect your card and receipt (if requested). Don\'t forget your belongings before leaving the ATM.'
      }
    ]
  },
  si: {
    header: {
      title: 'BOC ATM භාවිතා මාර්ගෝපදේශය',
      darkMode: 'අඳුරු ප්‍රකාරයට මාරු වන්න',
      lightMode: 'ආලෝක ප්‍රකාරයට මාරු වන්න'
    },
    footer: {
      copyright: 'සියලුම හිමිකම් ඇවිරිණි',
      disclaimer: 'මෙම මාර්ගෝපදේශය අධ්‍යාපනික කාර්යයන් සඳහා පමණි.'
    },
    guide: {
      title: 'BOC ATM භාවිතා කරන ආකාරය',
      subtitle: 'මෙම සරල පියවර අනුගමනය කරන්න:',
      voiceNarration: {
        start: 'කථනය ආරම්භ කරන්න',
        stop: 'කථනය නවත්වන්න'
      },
      navigation: {
        previous: 'පෙර',
        next: 'ඊළඟ',
        stepOf: 'පියවර {current} / {total}'
      }
    },
    steps: [
      {
        title: 'ATM කාඩ්පත ඇතුළු කරන්න',
        description: 'ඔබේ BOC බැංකු කාඩ්පත චිපය ඉහළට සහ යන්ත්‍රය දෙසට මුහුණලා කාඩ්පත් විවරයට ඇතුළු කරන්න.'
      },
      {
        title: 'භාෂාව තෝරන්න',
        description: 'තිරයේ දිස්වන විකල්ප වලින් ඔබ කැමති භාෂාව තෝරන්න.'
      },
      {
        title: 'PIN අංකය ඇතුළත් කරන්න',
        description: 'යතුරු පුවරුව භාවිතයෙන් ඔබේ ඉලක්කම් 4 පුද්ගලික හඳුනාගැනීමේ අංකය (PIN) ඇතුළත් කරන්න. ආරක්ෂාව සඳහා PIN ඇතුළත් කරන අතරතුර යතුරු පුවරුව ආවරණය කිරීමට වග බලා ගන්න.'
      },
      {
        title: 'ගනුදෙනු වර්ගය තෝරන්න',
        description: 'ඔබ සිදු කිරීමට අපේක්ෂා කරන ගනුදෙනු වර්ගය තෝරන්න (මුදල් ආපසු ගැනීම, ශේෂය විමසීම, කුඩා ප්‍රකාශනය, අරමුදල් මාරු කිරීම ආදිය).'
      },
      {
        title: 'මුදල ඇතුළත් කරන්න',
        description: 'මුදල් ආපසු ගැනීමේදී, යතුරු පුවරුව භාවිතයෙන් ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න හෝ ඉක්මන් මුදල් විකල්ප වලින් තෝරන්න.'
      },
      {
        title: 'මුදල් එකතු කරගන්න',
        description: 'අනුමත වූ පසු, බෙදාහැරීමේ විවරයෙන් ඔබේ මුදල් එකතු කරගන්න. ATM යන්ත්‍රය හැර යාමට පෙර ඔබේ මුදල් ගණන් කිරීමට වග බලා ගන්න.'
      },
      {
        title: 'කාඩ්පත සහ කුවිතාන්සිය ගන්න',
        description: 'ඔබේ කාඩ්පත සහ කුවිතාන්සිය (ඉල්ලා ඇත්නම්) ගන්න. ATM යන්ත්‍රය හැර යාමට පෙර ඔබේ දේපල අමතක නොකරන්න.'
      }
    ]
  },
  ta: {
    header: {
      title: 'BOC ATM பயன்பாட்டு வழிகாட்டி',
      darkMode: 'இருள் முறைக்கு மாறவும்',
      lightMode: 'ஒளி முறைக்கு மாறவும்'
    },
    footer: {
      copyright: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
      disclaimer: 'இந்த வழிகாட்டி கல்வி நோக்கங்களுக்கு மட்டுமே.'
    },
    guide: {
      title: 'BOC ATM ஐ எவ்வாறு பயன்படுத்துவது',
      subtitle: 'இந்த எளிய படிகளைப் பின்பற்றவும்:',
      voiceNarration: {
        start: 'விளக்கத்தைத் தொடங்கவும்',
        stop: 'விளக்கத்தை நிறுத்தவும்'
      },
      navigation: {
        previous: 'முந்தைய',
        next: 'அடுத்து',
        stepOf: 'படி {current} / {total}'
      }
    },
    steps: [
      {
        title: 'ATM அட்டையை செருகவும்',
        description: 'உங்கள் BOC வங்கி அட்டையை சிப் மேல்நோக்கி மற்றும் இயந்திரத்தை நோக்கி அட்டை துவாரத்தில் செருகவும்.'
      },
      {
        title: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        description: 'திரையில் காட்டப்படும் விருப்பங்களில் இருந்து உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.'
      },
      {
        title: 'PIN ஐ உள்ளிடவும்',
        description: 'விசைப்பலகையைப் பயன்படுத்தி உங்கள் 4-இலக்க தனிப்பட்ட அடையாள எண்ணை (PIN) உள்ளிடவும். பாதுகாப்பிற்காக PIN ஐ உள்ளிடும்போது விசைப்பலகையை மறைக்க உறுதிசெய்யவும்.'
      },
      {
        title: 'பரிவர்த்தனை வகையைத் தேர்ந்தெடுக்கவும்',
        description: 'நீங்கள் செய்ய விரும்பும் பரிவர்த்தனை வகையைத் தேர்ந்தெடுக்கவும் (பணம் எடுத்தல், இருப்பு விசாரணை, சிறு அறிக்கை, நிதி பரிமாற்றம் போன்றவை).'
      },
      {
        title: 'தொகையை உள்ளிடவும்',
        description: 'பணம் எடுப்பதாக இருந்தால், விசைப்பலகையைப் பயன்படுத்தி நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும் அல்லது விரைவு பண விருப்பங்களிலிருந்து தேர்ந்தெடுக்கவும்.'
      },
      {
        title: 'பணத்தை சேகரிக்கவும்',
        description: 'அங்கீகரிக்கப்பட்டவுடன், வழங்கும் துவாரத்திலிருந்து உங்கள் பணத்தை சேகரிக்கவும். ATM ஐ விட்டு வெளியேறுவதற்கு முன் உங்கள் பணத்தை எண்ணுவதை உறுதிசெய்யவும்.'
      },
      {
        title: 'அட்டை மற்றும் ரசீதை எடுக்கவும்',
        description: 'உங்கள் அட்டை மற்றும் ரசீதை (கோரப்பட்டால்) சேகரிக்கவும். ATM ஐ விட்டு வெளியேறுவதற்கு முன் உங்கள் உடைமைகளை மறக்காதீர்கள்.'
      }
    ]
  }
};