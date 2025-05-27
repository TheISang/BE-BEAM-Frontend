module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ✅ 여기!
  moduleNameMapper: {
    // 이미지 파일 등은 fileMock으로 대체
    '\\.(svg|jpg|jpeg|png|gif|webp|avif|ico)$': '<rootDir>/__mocks__/fileMock.ts',
    // CSS 파일 등도 필요하다면 아래 추가
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
