export default interface QuestionCardProps {
    questions: string;
    category: string;
    totalQuestions?: number;
    questionNumber?: number;
    callback: Function;
}
