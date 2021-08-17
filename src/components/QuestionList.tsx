import "./QuestionListStyle.css";
import React from "react";
import Accordion from "./Accordion";
import SearchBar from "./SearchBar";
import { FaInfo } from "react-icons/fa";
import Questions from "./Questions.json"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
interface QuestionsAnswers {
  question: string;
  answer: string;
}
type MyState = {
  filterFaqs: QuestionsAnswers[] | undefined;
  loading: boolean;
  faqs: QuestionsAnswers[];
};


const getQuestions = async (): Promise<QuestionsAnswers[]> => Questions;

 export const _filter = (
   value: string,
   data: any,
   props: string | string[]
 ): Array<any> | void => {
   if (data[0] === undefined) return;
   const query: string = value.toLowerCase();
   let newArray: Array<any> = [];
   // eslint-disable-next-line
   data.filter((e: any) => {
     if (typeof props === "string")
       return e[props].toLowerCase().includes(query);
     props.forEach((prop: string) => {
       if (String(e[prop]).toLowerCase().includes(query))
         newArray = data.filter((e: any) =>
           String(e[prop]).toLowerCase().includes(query)
         );
     });
   });
   return newArray;
 };


class QuestionList extends React.Component {
  constructor(props: any) {
    super(props);
    this.searchQuestions = this.searchQuestions.bind(this);
  }
  state: MyState = {
    filterFaqs: [],
    loading: false,
    faqs: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  searchQuestions(value: string) {
    const results = _filter(value, this.state.faqs, ["question"]);
    this.setState((prevState) => ({
      ...prevState,
      filterFaqs: results,
    }));
  }
  fetchData = async (): Promise<void> => {
    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      const listOfFaqs = await getQuestions();
      this.setState((prevState) => ({
        ...prevState,
        faqs: listOfFaqs,
        filterFaqs: listOfFaqs,
      }));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  render() {
    const { loading, filterFaqs } = this.state;
    return (
      <>
        {loading ? (
          <h1>loading. </h1>
        ) : (
          <Container className="main">
            <SearchBar search={this.searchQuestions} />
            {filterFaqs?.length === 0 ? (
              <div className="noQuestionFound">
                <div className="icon">
                  <FaInfo></FaInfo>
                </div>
                <span>Not found your question, Sorry</span>
              </div>
            ) : (
              filterFaqs?.map((faq: QuestionsAnswers, index: number) => (
                <Accordion key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Answer>{faq.answer}</Accordion.Answer>
                </Accordion>
              ))
            )}
          </Container>
        )}
      </>
    );
  }
}

export default QuestionList;
