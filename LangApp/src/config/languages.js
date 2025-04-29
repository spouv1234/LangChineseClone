export const languages = {
  Chinese: {
    code: 'zh',
    name: 'Chinese',
    flag: '🇨🇳',
    lessons: {
      beginner: [
        { id: 1, title: 'Basic Greetings', description: 'Learn essential Chinese greetings' },
        { id: 2, title: 'Numbers 1-10', description: 'Master Chinese numbers' },
        { id: 3, title: 'Common Phrases', description: 'Everyday Chinese expressions' },
      ],
      intermediate: [
        { id: 4, title: 'Food Vocabulary', description: 'Chinese food and dining terms' },
        { id: 5, title: 'Travel Phrases', description: 'Essential travel vocabulary' },
        { id: 6, title: 'Shopping Terms', description: 'Shopping and bargaining in Chinese' },
      ],
      advanced: [
        { id: 7, title: 'Business Chinese', description: 'Professional communication' },
        { id: 8, title: 'Chinese Culture', description: 'Cultural insights and idioms' },
        { id: 9, title: 'Advanced Grammar', description: 'Complex sentence structures' },
      ],
    },
  },
  Spanish: {
    code: 'es',
    name: 'Spanish',
    flag: '🇪🇸',
    lessons: {
      beginner: [
        { id: 1, title: 'Saludos Básicos', description: 'Aprende saludos esenciales en español' },
        { id: 2, title: 'Números 1-10', description: 'Domina los números en español' },
        { id: 3, title: 'Frases Comunes', description: 'Expresiones cotidianas en español' },
      ],
      intermediate: [
        { id: 4, title: 'Vocabulario de Comida', description: 'Términos de comida y restaurantes' },
        { id: 5, title: 'Frases de Viaje', description: 'Vocabulario esencial para viajar' },
        { id: 6, title: 'Términos de Compras', description: 'Compras y regateo en español' },
      ],
      advanced: [
        { id: 7, title: 'Español de Negocios', description: 'Comunicación profesional' },
        { id: 8, title: 'Cultura Española', description: 'Conocimientos culturales y modismos' },
        { id: 9, title: 'Gramática Avanzada', description: 'Estructuras de oraciones complejas' },
      ],
    },
  },
  French: {
    code: 'fr',
    name: 'French',
    flag: '🇫🇷',
    lessons: {
      beginner: [
        { id: 1, title: 'Salutations de Base', description: 'Apprenez les salutations essentielles' },
        { id: 2, title: 'Nombres 1-10', description: 'Maîtrisez les nombres en français' },
        { id: 3, title: 'Expressions Courantes', description: 'Expressions quotidiennes en français' },
      ],
      intermediate: [
        { id: 4, title: 'Vocabulaire Alimentaire', description: 'Termes de nourriture et restaurants' },
        { id: 5, title: 'Phrases de Voyage', description: 'Vocabulaire essentiel pour voyager' },
        { id: 6, title: 'Termes de Shopping', description: 'Shopping et négociation en français' },
      ],
      advanced: [
        { id: 7, title: 'Français des Affaires', description: 'Communication professionnelle' },
        { id: 8, title: 'Culture Française', description: 'Connaissances culturelles et expressions' },
        { id: 9, title: 'Grammaire Avancée', description: 'Structures de phrases complexes' },
      ],
    },
  },
  Japanese: {
    code: 'ja',
    name: 'Japanese',
    flag: '🇯🇵',
    lessons: {
      beginner: [
        { id: 1, title: '基本的な挨拶', description: '基本的な日本語の挨拶を学ぶ' },
        { id: 2, title: '数字1-10', description: '日本語の数字をマスターする' },
        { id: 3, title: '一般的なフレーズ', description: '日常的な日本語表現' },
      ],
      intermediate: [
        { id: 4, title: '食べ物の語彙', description: '食べ物とレストランの用語' },
        { id: 5, title: '旅行フレーズ', description: '旅行に必要な語彙' },
        { id: 6, title: 'ショッピング用語', description: '買い物と値引き交渉' },
      ],
      advanced: [
        { id: 7, title: 'ビジネス日本語', description: 'プロフェッショナルなコミュニケーション' },
        { id: 8, title: '日本文化', description: '文化的な洞察と慣用句' },
        { id: 9, title: '高度な文法', description: '複雑な文構造' },
      ],
    },
  },
  Korean: {
    code: 'ko',
    name: 'Korean',
    flag: '🇰🇷',
    lessons: {
      beginner: [
        { id: 1, title: '기본 인사말', description: '필수 한국어 인사말 배우기' },
        { id: 2, title: '숫자 1-10', description: '한국어 숫자 마스터하기' },
        { id: 3, title: '일반적인 표현', description: '일상적인 한국어 표현' },
      ],
      intermediate: [
        { id: 4, title: '음식 어휘', description: '음식과 레스토랑 용어' },
        { id: 5, title: '여행 표현', description: '필수 여행 어휘' },
        { id: 6, title: '쇼핑 용어', description: '쇼핑과 흥정' },
      ],
      advanced: [
        { id: 7, title: '비즈니스 한국어', description: '전문적인 의사소통' },
        { id: 8, title: '한국 문화', description: '문화적 통찰과 관용어' },
        { id: 9, title: '고급 문법', description: '복잡한 문장 구조' },
      ],
    },
  },
};

export const getLanguageConfig = (language) => {
  return languages[language] || languages.Chinese; // Default to Chinese if language not found
}; 