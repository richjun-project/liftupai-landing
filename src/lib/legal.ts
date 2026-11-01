// 개인정보 처리방침·계정 삭제 안내(ko·ja·en). 정적 HTML 로 그려 검색엔진·Play 검토가 자바스크립트 없이 읽는다.
// Notion 페이지는 자바스크립트로만 그려져 Google Play 정책 검토에서 "잘못된 개인정보처리방침"으로 거절됐다(2026-10-25).
// 사실 기준(2026-11-01): 탈퇴 = 서버 UserService.deleteAccount(데이터베이스 전체 + 올린 사진, 백엔드 b0a23fb),
// 접속 로그 = Caddy roll_keep_for 720h, 비밀번호 = BCrypt, 위탁 = AWS 서울·Google(Gemini·Firebase)·Apple·Kakao·RevenueCat.

export type LegalLang = "ko" | "ja" | "en";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  /** 순서가 있는 단계(삭제 방법) */
  ordered?: boolean;
};

export type LegalDoc = {
  title: string;
  description: string;
  effective: string;
  intro: string[];
  sections: LegalSection[];
};

const EMAIL = "ggprgrkjh2@gmail.com";

export const legalPaths = {
  privacy: { ko: "/privacy", ja: "/ja/privacy", en: "/en/privacy" },
  deletion: { ko: "/delete-account", ja: "/ja/delete-account", en: "/en/delete-account" },
} as const;

export const privacy: Record<LegalLang, LegalDoc> = {
  ko: {
    title: "리프트업AI 개인정보 처리방침",
    description: "리프트업AI(LiftUp AI)가 수집하는 개인정보, 이용 목적, 처리 위탁, 보유 기간과 삭제 방법.",
    effective: "시행일 2026년 11월 1일",
    intro: [
      "리프트업AI(LiftUp AI, Google Play 앱 이름 '리프트업 AI 트레이너 - 헬스 PT 운동루틴', 이하 '앱')는 김준형(Google Play 개발자 이름 kjh8870, 이하 '운영자')이 운영하는 AI 퍼스널 트레이닝 앱입니다. 이 방침은 앱과 liftupai.net 에서 어떤 개인정보를 왜 수집하고, 누구에게 처리를 맡기며, 언제 지우는지 설명합니다.",
    ],
    sections: [
      {
        heading: "1. 수집하는 정보",
        items: [
          "계정: 소셜 로그인(Google·Apple·카카오) 식별자, 이메일(제공된 경우), 닉네임. 이메일로 가입하면 이메일과 비밀번호(복원할 수 없는 해시로 저장).",
          "신체·운동 정보(입력한 경우): 성별, 나이, 키, 몸무게, 운동 경험, 목표, 부상 부위, 사용할 수 있는 장비, 선호 운동 시간과 주간 횟수, 체력 측정 값.",
          "운동·식단 기록: 운동 종목과 세트(무게·횟수·시간), 운동 플랜, 근육 회복 상태, 식단 기록.",
          "AI PT 대화: 채팅 내용, 채팅·식단 분석에 올린 사진, AI PT 가 다음 대화를 위해 기억하는 사실(예: 부상, 선호).",
          "기기·이용 정보: 푸시 알림 토큰, 기기 종류와 OS, 앱 버전, 언어와 시간대, 앱 안 이용 기록(예: 운동 시작, 세트 완료), 접속 IP 주소.",
          "구독 정보: 구독 상태, 결제 일시와 금액. 카드 번호 같은 결제 수단 정보는 받지 않습니다(Apple·Google 이 처리합니다).",
        ],
      },
      {
        heading: "2. 이용 목적",
        items: [
          "맞춤 운동 플랜과 AI 코칭 제공",
          "운동·식단 기록 저장과 통계",
          "운동 알림·코칭 메시지 발송",
          "구독 확인과 관리",
          "오류 대응과 부정 이용 방지",
          "이용 통계를 통한 서비스 개선",
          "문의 응답",
        ],
        paragraphs: ["개인정보를 판매하지 않으며, 맞춤형 광고에 쓰지 않습니다."],
      },
      {
        heading: "3. 처리 위탁과 국외 이전",
        items: [
          "Amazon Web Services(대한민국, 서울 리전): 서버·데이터베이스·사진 저장",
          "Google LLC(미국): Gemini API 로 AI 답변과 식단 사진 분석 생성(대화 내용·사진·운동 정보가 전송됩니다), Firebase 푸시 알림과 이용 통계, Google 로그인",
          "Apple Inc.(미국): Apple 로그인, App Store 결제",
          "Kakao Corp.(대한민국): 카카오 로그인",
          "RevenueCat, Inc.(미국): 구독 상태 확인(앱 사용자 식별자와 구매 정보)",
        ],
        paragraphs: [
          "국외 이전은 앱을 이용할 때 네트워크로 이뤄지며, 각 회사는 맡긴 목적 안에서만 정보를 처리합니다.",
        ],
      },
      {
        heading: "4. 보유 기간과 삭제",
        items: [
          "계정을 삭제하면 위 정보(올린 사진 포함)를 서비스 데이터베이스와 저장소에서 바로 지웁니다.",
          "접속 기록(IP 주소 등)은 보안과 장애 대응을 위해 서버 로그에 남으며, 로그 파일이 교체된 뒤 30일이 지나면 삭제됩니다.",
          "장애 복구용 데이터베이스 백업 사본에는 삭제 전 정보가 남아 있을 수 있습니다. 백업은 복구 외에 쓰지 않으며, 요청하시면 백업에서도 지웁니다.",
          "결제 원본 기록은 Apple·Google 이 각자의 정책에 따라 보관합니다.",
        ],
        paragraphs: ["계정 삭제 방법은 아래 '계정 삭제 안내' 페이지에 있습니다."],
      },
      {
        heading: "5. 이용자의 권리",
        items: [
          "앱의 프로필 탭에서 정보를 확인하고 고칠 수 있습니다.",
          "앱에서 회원 탈퇴를 하면 계정과 정보가 바로 삭제됩니다.",
          `이메일(${EMAIL})로 열람·정정·삭제·처리 정지를 요청할 수 있으며, 본인 확인 후 지체 없이 처리합니다.`,
        ],
      },
      {
        heading: "6. 아동",
        paragraphs: ["앱은 만 14세 미만 아동을 대상으로 하지 않으며, 알면서 아동의 정보를 수집하지 않습니다."],
      },
      {
        heading: "7. 안전 조치",
        items: [
          "앱과 서버 사이의 모든 통신은 HTTPS 로 암호화합니다.",
          "비밀번호는 복원할 수 없는 해시로 저장합니다.",
          "서버와 데이터베이스 접근은 운영자에게만 허용하며, 데이터베이스는 인터넷에서 직접 접속할 수 없습니다.",
        ],
      },
      {
        heading: "8. 방침 변경",
        paragraphs: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 알립니다."],
      },
      {
        heading: "9. 문의",
        paragraphs: [`개인정보 보호 책임자: 김준형 · ${EMAIL}`],
      },
    ],
  },
  ja: {
    title: "LiftUp AI プライバシーポリシー",
    description: "LiftUp AI が収集する個人情報、利用目的、委託先、保存期間と削除方法。",
    effective: "施行日 2026年11月1日",
    intro: [
      "LiftUp AI(Google Play のアプリ名「LIFTUP AIパーソナルトレーナー・筋トレ記録」、以下「本アプリ」)は、김준형 / Jun Hyeong Kim(Google Play デベロッパー名 kjh8870、以下「運営者」)が運営する AI パーソナルトレーニングアプリです。本ポリシーは、本アプリと liftupai.net で収集する個人情報、その目的、委託先、削除の時期を説明します。",
    ],
    sections: [
      {
        heading: "1. 収集する情報",
        items: [
          "アカウント: ソーシャルログイン(Google・Apple・Kakao)の識別子、メールアドレス(提供された場合)、ニックネーム。メールで登録した場合はメールアドレスとパスワード(復元できないハッシュで保存)。",
          "身体・運動情報(入力した場合): 性別、年齢、身長、体重、運動経験、目標、ケガの部位、使える器具、希望する運動時間と週の回数、体力測定の値。",
          "運動・食事の記録: 種目とセット(重量・回数・時間)、トレーニングプラン、筋肉の回復状態、食事の記録。",
          "AI PT との会話: チャットの内容、チャットや食事分析でアップロードした写真、AI PT が次の会話のために覚えている事実(ケガ、好みなど)。",
          "端末・利用情報: プッシュ通知トークン、端末の種類と OS、アプリのバージョン、言語とタイムゾーン、アプリ内の利用記録(トレーニング開始、セット完了など)、接続 IP アドレス。",
          "サブスクリプション情報: 購読状態、決済日時と金額。カード番号などの決済手段の情報は受け取りません(Apple・Google が処理します)。",
        ],
      },
      {
        heading: "2. 利用目的",
        items: [
          "パーソナライズされたトレーニングプランと AI コーチングの提供",
          "運動・食事の記録の保存と統計",
          "トレーニングのリマインダーとコーチングメッセージの送信",
          "サブスクリプションの確認と管理",
          "不具合対応と不正利用の防止",
          "利用統計によるサービス改善",
          "お問い合わせへの対応",
        ],
        paragraphs: ["個人情報を販売することはなく、ターゲティング広告には使いません。"],
      },
      {
        heading: "3. 委託と国外移転",
        items: [
          "Amazon Web Services(韓国・ソウルリージョン): サーバー、データベース、写真の保存",
          "Google LLC(米国): Gemini API による AI の回答と食事写真分析の生成(会話内容・写真・運動情報が送信されます)、Firebase のプッシュ通知と利用統計、Google ログイン",
          "Apple Inc.(米国): Apple でサインイン、App Store の決済",
          "Kakao Corp.(韓国): Kakao ログイン",
          "RevenueCat, Inc.(米国): サブスクリプション状態の確認(アプリのユーザー識別子と購入情報)",
        ],
        paragraphs: ["国外移転は本アプリの利用時にネットワーク経由で行われ、各社は委託された目的の範囲でのみ情報を処理します。"],
      },
      {
        heading: "4. 保存期間と削除",
        items: [
          "アカウントを削除すると、上記の情報(アップロードした写真を含む)をサービスのデータベースとストレージからすぐに削除します。",
          "接続記録(IP アドレスなど)はセキュリティと障害対応のためサーバーログに残り、ログファイルの切り替えから30日後に削除されます。",
          "障害復旧用のデータベースのバックアップには削除前の情報が残る場合があります。バックアップは復旧以外に使わず、ご依頼があればバックアップからも削除します。",
          "決済の元の記録は Apple・Google がそれぞれのポリシーに従って保存します。",
        ],
        paragraphs: ["アカウントの削除方法は「アカウント削除のご案内」ページにあります。"],
      },
      {
        heading: "5. ご本人の権利",
        items: [
          "アプリのプロフィールタブで情報を確認・修正できます。",
          "アプリでアカウントを削除すると、アカウントと情報がすぐに削除されます。",
          `メール(${EMAIL})で開示・訂正・削除・利用停止を依頼でき、本人確認のうえ速やかに対応します。`,
        ],
      },
      {
        heading: "6. 子ども",
        paragraphs: ["本アプリは14歳未満の子どもを対象としておらず、子どもの情報を意図的に収集することはありません。"],
      },
      {
        heading: "7. 安全管理",
        items: [
          "アプリとサーバーの通信はすべて HTTPS で暗号化しています。",
          "パスワードは復元できないハッシュで保存しています。",
          "サーバーとデータベースへのアクセスは運営者に限られ、データベースはインターネットから直接接続できません。",
        ],
      },
      {
        heading: "8. 改定",
        paragraphs: ["本ポリシーを改定する場合は、施行日とともにこのページでお知らせします。"],
      },
      {
        heading: "9. お問い合わせ",
        paragraphs: [`個人情報保護責任者: 김준형 (Jun Hyeong Kim) · ${EMAIL}`],
      },
    ],
  },
  en: {
    title: "LiftUp AI Privacy Policy",
    description: "What personal data LiftUp AI collects, why, who processes it, how long it is kept, and how to delete it.",
    effective: "Effective November 1, 2026",
    intro: [
      "LiftUp AI (Google Play app name: \"LiftUp AI: Personal Trainer\"; the \"App\") is an AI personal training app operated by Jun Hyeong Kim (Google Play developer name: kjh8870, the \"Operator\"). This policy explains what personal data the App and liftupai.net collect, why, who processes it on our behalf, and when it is deleted.",
    ],
    sections: [
      {
        heading: "1. Data we collect",
        items: [
          "Account: social sign-in identifiers (Google, Apple, Kakao), email address (if provided), nickname. If you sign up with email, your email and password (stored as a one-way hash).",
          "Body and training profile (if you enter it): gender, age, height, weight, training experience, goals, injured body parts, available equipment, preferred workout time and weekly frequency, fitness test results.",
          "Workout and meal logs: exercises and sets (weight, reps, time), training plans, muscle recovery status, meal logs.",
          "AI PT conversations: chat messages, photos you upload in chat or for meal analysis, and facts the AI PT remembers for later conversations (for example injuries or preferences).",
          "Device and usage data: push notification token, device type and OS, app version, language and time zone, in-app usage events (for example workout started, set completed), IP address.",
          "Subscription data: subscription status, payment date and amount. We never receive card numbers or other payment details (Apple and Google process payments).",
        ],
      },
      {
        heading: "2. How we use it",
        items: [
          "Provide personalized training plans and AI coaching",
          "Store workout and meal logs and show statistics",
          "Send workout reminders and coaching messages",
          "Verify and manage subscriptions",
          "Fix errors and prevent abuse",
          "Improve the service using usage statistics",
          "Respond to inquiries",
        ],
        paragraphs: ["We do not sell personal data and do not use it for targeted advertising."],
      },
      {
        heading: "3. Processors and international transfers",
        items: [
          "Amazon Web Services (Seoul region, Republic of Korea): servers, database, photo storage",
          "Google LLC (USA): Gemini API to generate AI replies and meal photo analysis (chat content, photos and workout data are sent), Firebase push notifications and usage analytics, Google Sign-In",
          "Apple Inc. (USA): Sign in with Apple, App Store payments",
          "Kakao Corp. (Republic of Korea): Kakao sign-in",
          "RevenueCat, Inc. (USA): subscription status (app user identifier and purchase information)",
        ],
        paragraphs: ["Transfers happen over the network while you use the App, and each company processes the data only for the purpose described."],
      },
      {
        heading: "4. Retention and deletion",
        items: [
          "When you delete your account, the data above (including uploaded photos) is removed from the service database and storage immediately.",
          "Access records (such as IP addresses) are kept in server logs for security and troubleshooting and are deleted 30 days after the log file is rotated.",
          "Database backups made for disaster recovery may still contain data from before deletion. Backups are used only for recovery, and we will remove your data from them on request.",
          "Original payment records are kept by Apple and Google under their own policies.",
        ],
        paragraphs: ["See the Account Deletion page for how to delete your account."],
      },
      {
        heading: "5. Your rights",
        items: [
          "View and edit your information in the Profile tab of the App.",
          "Delete your account in the App; your account and data are deleted immediately.",
          `Request access, correction, deletion or restriction by email (${EMAIL}); we respond promptly after verifying your identity.`,
        ],
      },
      {
        heading: "6. Children",
        paragraphs: ["The App is not directed to children under 14, and we do not knowingly collect their personal data."],
      },
      {
        heading: "7. Security",
        items: [
          "All traffic between the App and our servers is encrypted with HTTPS.",
          "Passwords are stored as one-way hashes.",
          "Access to servers and the database is limited to the Operator, and the database cannot be reached directly from the internet.",
        ],
      },
      {
        heading: "8. Changes",
        paragraphs: ["If this policy changes, we will post the update on this page with a new effective date."],
      },
      {
        heading: "9. Contact",
        paragraphs: [`Privacy contact: Jun Hyeong Kim · ${EMAIL}`],
      },
    ],
  },
};

export const deletion: Record<LegalLang, LegalDoc> = {
  ko: {
    title: "리프트업AI 계정 삭제 안내",
    description: "리프트업AI(LiftUp AI) 계정과 데이터를 삭제하는 방법, 삭제되는 데이터와 남는 데이터.",
    effective: "2026년 11월 1일 기준",
    intro: [
      "리프트업AI(LiftUp AI · Google Play 앱 이름 '리프트업 AI 트레이너 - 헬스 PT 운동루틴', 개발자 kjh8870 · 운영자 김준형) 계정과 모든 데이터는 앱에서 바로 지우거나, 앱 없이 이메일로 요청해 지울 수 있습니다.",
    ],
    sections: [
      {
        heading: "앱에서 삭제하기",
        ordered: true,
        items: [
          "리프트업AI 앱을 열고 아래 '프로필' 탭으로 갑니다.",
          "화면 맨 아래 '로그아웃' 밑의 '회원 탈퇴'를 누릅니다.",
          "확인 창에서 탈퇴를 누르면 계정과 데이터가 바로 삭제됩니다.",
        ],
      },
      {
        heading: "앱 없이 요청하기",
        ordered: true,
        items: [
          `${EMAIL} 으로 제목 '계정 삭제 요청'을 보내 주세요.`,
          "본문에 가입할 때 쓴 로그인 방식(Google·Apple·카카오·이메일)과 이메일 또는 닉네임을 적어 주세요.",
          "본인 확인 후 7일 안에 삭제하고, 완료되면 답장으로 알려 드립니다.",
        ],
      },
      {
        heading: "삭제되는 데이터",
        items: [
          "계정과 프로필(닉네임, 이메일, 신체·운동 정보, 부상, 장비, 설정)",
          "운동 기록, 운동 플랜, 개인 기록, 근육 회복 기록",
          "식단 기록",
          "AI PT 대화 내용과 AI PT 가 기억하는 사실",
          "채팅·식단 분석에 올린 사진",
          "알림 설정과 기기의 푸시 알림 토큰, 앱 이용 기록",
          "구독·결제 내역(서비스 데이터베이스에 있는 것)",
        ],
        paragraphs: ["위 데이터는 삭제하는 즉시 지워지며 되돌릴 수 없습니다."],
      },
      {
        heading: "남을 수 있는 데이터",
        items: [
          "Apple·Google 결제 기록: 각 스토어가 자체 정책에 따라 보관합니다.",
          "서버 접속 기록(IP 주소 등): 로그 파일이 교체된 뒤 30일이 지나면 삭제됩니다.",
          "장애 복구용 데이터베이스 백업 사본: 복구 외에 쓰지 않으며, 요청하시면 백업에서도 지웁니다.",
        ],
      },
      {
        heading: "구독은 따로 해지해 주세요",
        paragraphs: [
          "계정을 삭제해도 App Store·Google Play 구독은 자동으로 해지되지 않습니다. 기기의 스토어 구독 설정에서 해지해 주세요.",
        ],
      },
    ],
  },
  ja: {
    title: "LiftUp AI アカウント削除のご案内",
    description: "LiftUp AI のアカウントとデータを削除する方法、削除されるデータと残るデータ。",
    effective: "2026年11月1日時点",
    intro: [
      "LiftUp AI(Google Play のアプリ名「LIFTUP AIパーソナルトレーナー・筋トレ記録」、デベロッパー kjh8870 / 運営者 김준형 Jun Hyeong Kim)のアカウントとすべてのデータは、アプリからすぐに削除するか、アプリなしでメールで削除を依頼できます。",
    ],
    sections: [
      {
        heading: "アプリで削除する",
        ordered: true,
        items: [
          "LiftUp AI アプリを開き、下の「プロフィール」タブを開きます。",
          "画面の一番下、「ログアウト」の下にある「アカウント削除」をタップします。",
          "確認画面で削除するとアカウントとデータがすぐに削除されます。",
        ],
      },
      {
        heading: "アプリなしで依頼する",
        ordered: true,
        items: [
          `${EMAIL} に件名「アカウント削除依頼」でメールを送ってください。`,
          "本文に登録時のログイン方法(Google・Apple・Kakao・メール)と、メールアドレスまたはニックネームをご記入ください。",
          "本人確認のうえ7日以内に削除し、完了したら返信でお知らせします。",
        ],
      },
      {
        heading: "削除されるデータ",
        items: [
          "アカウントとプロフィール(ニックネーム、メールアドレス、身体・運動情報、ケガ、器具、設定)",
          "トレーニング記録、プラン、自己ベスト、筋肉の回復記録",
          "食事の記録",
          "AI PT との会話と AI PT が覚えている事実",
          "チャットや食事分析でアップロードした写真",
          "通知設定と端末のプッシュ通知トークン、アプリの利用記録",
          "サブスクリプション・決済履歴(サービスのデータベースにあるもの)",
        ],
        paragraphs: ["上記のデータは削除と同時に消去され、元に戻せません。"],
      },
      {
        heading: "残る場合があるデータ",
        items: [
          "Apple・Google の決済記録: 各ストアのポリシーに従って保存されます。",
          "サーバーの接続記録(IP アドレスなど): ログファイルの切り替えから30日後に削除されます。",
          "障害復旧用のデータベースのバックアップ: 復旧以外には使わず、ご依頼があればバックアップからも削除します。",
        ],
      },
      {
        heading: "サブスクリプションは別途解約してください",
        paragraphs: [
          "アカウントを削除しても App Store・Google Play のサブスクリプションは自動では解約されません。端末のストアのサブスクリプション設定から解約してください。",
        ],
      },
    ],
  },
  en: {
    title: "LiftUp AI Account Deletion",
    description: "How to delete your LiftUp AI account and data, what is deleted, and what may be retained.",
    effective: "As of November 1, 2026",
    intro: [
      "You can delete your LiftUp AI account (Google Play app name: \"LiftUp AI: Personal Trainer\", developer: kjh8870, operated by Jun Hyeong Kim) and all of its data right in the app, or request deletion by email without the app.",
    ],
    sections: [
      {
        heading: "Delete in the app",
        ordered: true,
        items: [
          "Open the LiftUp AI app and go to the Profile tab at the bottom.",
          "Scroll to the bottom and tap \"Delete Account\" below \"Log Out\".",
          "Confirm, and your account and data are deleted immediately.",
        ],
      },
      {
        heading: "Request deletion without the app",
        ordered: true,
        items: [
          `Email ${EMAIL} with the subject \"Account deletion request\".`,
          "Include the sign-in method you used (Google, Apple, Kakao or email) and your email address or nickname.",
          "We verify your identity, delete your account within 7 days, and reply when it is done.",
        ],
      },
      {
        heading: "Data that is deleted",
        items: [
          "Account and profile (nickname, email, body and training information, injuries, equipment, settings)",
          "Workout logs, training plans, personal records, muscle recovery records",
          "Meal logs",
          "AI PT conversations and the facts the AI PT remembers",
          "Photos uploaded in chat or for meal analysis",
          "Notification settings, device push tokens and in-app usage records",
          "Subscription and payment history stored in our database",
        ],
        paragraphs: ["This data is erased as soon as you delete your account and cannot be restored."],
      },
      {
        heading: "Data that may be retained",
        items: [
          "Apple and Google payment records, kept by each store under its own policy.",
          "Server access records (such as IP addresses), deleted 30 days after the log file is rotated.",
          "Disaster-recovery database backups, used only for recovery; we remove your data from them on request.",
        ],
      },
      {
        heading: "Cancel your subscription separately",
        paragraphs: [
          "Deleting your account does not cancel an App Store or Google Play subscription. Cancel it in your device's store subscription settings.",
        ],
      },
    ],
  },
};
