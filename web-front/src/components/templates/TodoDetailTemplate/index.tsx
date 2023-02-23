import { useRouter } from 'next/router'
import { useTodoContext } from '../../../contexts/TodoContext'
import { BaseLayout } from '../../organisms/BaseLayout'
import { InputForm } from '../../atoms/InputForm'
import { TextArea } from '../../atoms/TextArea'

export const TodoDetailTemplate = () => {
    const { originTodoList } = useTodoContext()
    const router = useRouter()
    const todo = originTodoList.find(
        (todo) => String(todo.id) === router?.query.id
    )

    return (
        <BaseLayout title={'Todo Detail'}>
            {!!todo && (
                <div className="container">
                    <div className="area">
                        <InputForm
                            disabled
                            value={todo.title}
                            placeholder={'title'}
                        />
                    </div>
                    <div className="area">
                        <TextArea
                            disabled
                            value={todo.content}
                            placeholder={'content'}
                        />
                    </div>
                </div>
            )}
        </BaseLayout>
    )
}
